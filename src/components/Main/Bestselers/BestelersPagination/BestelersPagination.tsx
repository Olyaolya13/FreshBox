import { useEffect, useState } from 'react';
import './BestelersPagination.css';
import ShopCard from '../../ShopCard/ShopCard';
import BtnPaginationLeft from '../../../../assets/BtnPaginationLeft.svg?react';
import BtnPaginationRight from '../../../../assets/BtnPaginationRight.svg?react';
import { BestelersPaginationData } from '../../../../utils/constants';

export default function BestelersPagination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % BestelersPaginationData.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      prevIndex =>
        (prevIndex - 1 + BestelersPaginationData.images.length) %
        BestelersPaginationData.images.length
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bestsekers-pagination">
      <BtnPaginationLeft className="bestsekers-pagination__btn" onClick={prevImage} />
      <div className="bestsekers-pagination__cards">
        {[0, 1, 2, 3].map((_, index) => {
          const actualIndex = currentIndex + index;
          return (
            <ShopCard
              key={actualIndex}
              title={
                BestelersPaginationData.titles[actualIndex % BestelersPaginationData.titles.length]
              }
              alt={BestelersPaginationData.alt[actualIndex % BestelersPaginationData.alt.length]}
              count={
                BestelersPaginationData.count[actualIndex % BestelersPaginationData.count.length]
              }
              image={
                BestelersPaginationData.images[actualIndex % BestelersPaginationData.images.length]
              }
            />
          );
        })}
      </div>
      <BtnPaginationRight className="bestsekers-pagination__btn" onClick={nextImage} />
    </div>
  );
}

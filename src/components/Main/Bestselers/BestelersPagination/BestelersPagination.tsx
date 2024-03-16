import { useEffect, useState } from 'react';
import './BestelersPagination.css';
import Raspberry from '../../../../assets/СardRaspberry.svg';
import Blueberry from '../../../../assets/СardBlueberry.svg';
import Mango from '../../../../assets/СardMango.svg';
import Lime from '../../../../assets/СardLime.svg';
import Banana from '../../../../assets/СardBanana.svg';
import Strawberry from '../../../../assets/СardStrawberry.svg';
import ShopCard from '../../ShopCard/ShopCard';
import BtnPaginationLeft from '../../../../assets/BtnPaginationLeft.svg?react';
import BtnPaginationRight from '../../../../assets/BtnPaginationRight.svg?react';

const images = [Raspberry, Blueberry, Mango, Lime, Banana, Strawberry];
const titles = ['Raspberry', 'Blueberry', 'Mango', ' Lime', 'Banana', 'Strawberry'];
const alt = ['Raspberry', 'Blueberry', 'Mango', ' Lime', 'Banana', 'Strawberry'];
const count = ['5', '6', '5', '4', '3', '6'];

export default function BestelersPagination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
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
        {[currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3].map(index => (
          <ShopCard
            key={index}
            title={titles[index % titles.length]}
            alt={alt[index % alt.length]}
            count={count[index % count.length]}
            image={images[index % images.length]}
          />
        ))}
      </div>
      <BtnPaginationRight className="bestsekers-pagination__btn" onClick={nextImage} />
    </div>
  );
}

import { useState } from 'react';
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

export default function BestelersPagination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const firstIndex = currentIndex % images.length;
  const secondIndex = (currentIndex + 1) % images.length;
  const thirdIndex = (currentIndex + 2) % images.length;
  const forthIndex = (currentIndex + 3) % images.length;

  return (
    <div className="bestsekers-pagination">
      <BtnPaginationLeft className="bestsekers-pagination__btn" onClick={prevImage} />
      <div className="bestsekers-pagination__cards">
        <ShopCard
          title={titles[firstIndex]}
          alt={alt[firstIndex]}
          count="5"
          image={images[firstIndex]}
        />
        <ShopCard
          title={titles[secondIndex]}
          alt={alt[secondIndex]}
          count="5"
          image={images[secondIndex]}
        />
        <ShopCard
          title={titles[thirdIndex]}
          alt={alt[thirdIndex]}
          count="5"
          image={images[thirdIndex]}
        />
        <ShopCard
          title={titles[forthIndex]}
          alt={alt[forthIndex]}
          count="5"
          image={images[forthIndex]}
        />
      </div>
      <BtnPaginationRight className="bestsekers-pagination__btn" onClick={nextImage} />
    </div>
  );
}

import './ShopContent.css';
import ShopCard from '../ShopCard/ShopCard';
import { ShopData, BestelersPaginationData } from '../../../utils/constants';

export default function ShopContent() {
  const allData = ShopData.titles.concat(BestelersPaginationData.titles);
  const allCounts = ShopData.count.concat(BestelersPaginationData.count);
  const allAlts = ShopData.alt.concat(BestelersPaginationData.alt);
  const allImages = ShopData.images.concat(BestelersPaginationData.images);

  return (
    <div className="shop-content__card">
      {allData.map((_, index) => (
        <ShopCard
          key={index}
          title={allData[index]}
          count={allCounts[index]}
          alt={allAlts[index]}
          image={allImages[index]}
          isHit={index < ShopData.titles.length ? false : true}
        />
      ))}
    </div>
  );
}

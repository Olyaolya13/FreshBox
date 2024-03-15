import './Bestselers.css';
import ShopCard from '../ShopCard/ShopCard';
import { BestselersData } from '../../../utils/constants';

export default function Bestselers() {
  return (
    <section className="bestselers">
      <h2 className="bestselers__title">{BestselersData.title}</h2>
      <ShopCard title="Raspberry" count="5" />
    </section>
  );
}

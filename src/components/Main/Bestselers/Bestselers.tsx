import './Bestselers.css';
import ShopCard from '../ShopCard/ShopCard';
import { BestselersData } from '../../../utils/constants';
import Raspberry from '../../../assets/СardRaspberry.svg';
import Blueberry from '../../../assets/СardBlueberry.svg';
import Mango from '../../../assets/СardMango.svg';
import Lime from '../../../assets/СardLime.svg';

export default function Bestselers() {
  return (
    <section className="bestselers">
      <h2 className="bestselers__title">{BestselersData.title}</h2>
      <div className="bestselers__card">
        <ShopCard title="Raspberry" count="5" image={Raspberry} />
        <ShopCard title="Blueberry" count="5" image={Blueberry} />
        <ShopCard title="Mango" count="5" image={Mango} />
        <ShopCard title="Lime" count="5" image={Lime} />
      </div>
    </section>
  );
}

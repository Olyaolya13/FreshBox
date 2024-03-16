import './Bestselers.css';
import BestselersPagination from '../BestelersPagination/BestelersPagination';
import { BestselersData } from '../../../utils/constants';

export default function Bestselers() {
  return (
    <section className="bestselers">
      <h2 className="bestselers__title">{BestselersData.title}</h2>
      <div className="bestselers__card">
        <BestselersPagination />
      </div>
    </section>
  );
}

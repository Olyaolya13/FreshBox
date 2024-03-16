import './Bestselers.css';
import BestselersPagination from './BestelersPagination/BestelersPagination';
import Title from '../Title/Title';

export default function Bestselers() {
  return (
    <section className="bestselers">
      <Title title="Best Selers" />
      <div className="bestselers__card">
        <BestselersPagination />
      </div>
    </section>
  );
}

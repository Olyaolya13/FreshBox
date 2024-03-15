import './OrderSteps.css';
import OrderStepsCard from './OrderStepsCard/OrderStepsCard';
import { OrderStepsData } from '../../../utils/constants';

export default function OrderSteps() {
  return (
    <section className="steps">
      <div className="steps__text">
        <h2 className="steps__title">{OrderStepsData.title}</h2>
        <p className="steps__subtitle">{OrderStepsData.subtitle}</p>
      </div>
      <div className="steps__card">
        <OrderStepsCard
          backgroundColor="#E2CE66"
          hoverBackgroundColor="#EDDB81"
          title="Step 1"
          text="Browse our fresh fruit and berry selection to choose items for your basket"
        />
        <OrderStepsCard
          backgroundColor="#F3B557"
          hoverBackgroundColor="#FCC672"
          title="Step 2"
          text="Select the basket icon and complete the order form"
        />
        <OrderStepsCard
          backgroundColor="#879f36"
          hoverBackgroundColor="#97B044"
          title="Step 3"
          text="Once satisfied, proceed to checkout. We'll handle the rest!"
        />
      </div>
    </section>
  );
}

import './OrderSteps.css';
import OrderStepsInstruction from './OrderStepsInstruction/OrderStepsInstruction';
import { OrderStepsData } from '../../../utils/constants';

export default function OrderSteps() {
  return (
    <section className="steps">
      <div className="steps__text">
        <h2 className="steps__title">{OrderStepsData.title}</h2>
        <p className="steps__subtitle">{OrderStepsData.subtitle}</p>
      </div>
      <OrderStepsInstruction
        backgroundColor="#D5435F"
        hoverBackgroundColor="#E75F79"
        title="Step 1"
        text="Browse through our selection of fresh fruits and berries and select the ones you'd like to include in your basket"
      />
      <OrderStepsInstruction
        hoverBackgroundColor="#EED764"
        backgroundColor="#e4ca47"
        title="Step 2"
        text="Select the basket icon and complete the order form."
      />
      <OrderStepsInstruction
        hoverBackgroundColor="#97B044"
        backgroundColor="#879f36"
        title="Step 3"
        text="Once you're satisfied with your selection, proceed to checkout your order. We'll take care of the rest!"
      />
    </section>
  );
}

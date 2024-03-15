import './Main.css';
import Content from './Content/Content';
import OrderSteps from './OrderSteps/OrderSteps';
import Bestselers from './Bestselers/Bestselers';

export default function Main() {
  return (
    <main>
      <Content />
      <OrderSteps />
      <Bestselers />
    </main>
  );
}

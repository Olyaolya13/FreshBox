import './Main.css';
import Content from './Content/Content';
import OrderSteps from './OrderSteps/OrderSteps';
import Bestselers from './Bestselers/Bestselers';
import Post from './Post/Post';

export default function Main() {
  return (
    <main>
      <Content />
      <OrderSteps />
      <Bestselers />
      <Post />
    </main>
  );
}

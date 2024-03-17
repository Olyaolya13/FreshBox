import './Main.css';
import Content from './Content/Content';
import OrderSteps from './OrderSteps/OrderSteps';
import Bestselers from './Bestselers/Bestselers';
import Post from './Post/Post';
import Comment from './Comments/Comments';

export default function Main() {
  return (
    <main>
      <Content />
      <OrderSteps />
      <Bestselers />
      <Post />
      <Comment />
    </main>
  );
}

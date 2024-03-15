import './Content.css';
import SumbitBtn from '../../SubmitBtn/SubmitBtn';

export default function Content() {
  return (
    <section className="content">
      <div className="content__text">
        <h2 className="content__title"></h2>
        <p className="content__subtitle"></p>
      </div>
      <SumbitBtn />
    </section>
  );
}

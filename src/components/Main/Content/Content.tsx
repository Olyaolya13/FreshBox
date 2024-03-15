import './Content.css';
import SumbitBtn from '../../SubmitBtn/SubmitBtn';
import { ContentData } from '../../../utils/constants';
import ContentImgBtn from './ContentImgBtn/ContentImgBtn';

export default function Content() {
  return (
    <section className="content">
      <div className="content__text">
        <h2 className="content__title">{ContentData.title}</h2>
        <h2 className="content__title">{ContentData.titlePhrase}</h2>
        <p className="content__subtitle">{ContentData.subtitle}</p>
        <SumbitBtn title="Explore the Orchard" width="180px" />
      </div>
      <ContentImgBtn />
    </section>
  );
}

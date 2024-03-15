import './Content.css';
import SumbitBtn from '../../SubmitBtn/SubmitBtn';
import OrangeImg from '../../../assets/ContentOrange.svg?react';
import StrawberryImg from '../../../assets/ContentStrawberry.svg?react';
import BlueBettyImg from '../../../assets/ContentBlueBerry.svg?react';
import AppleImg from '../../../assets/ContentApple.svg?react';
import MelonImg from '../../../assets/ContentMelon.svg?react';
import LimeImg from '../../../assets/ContentLime.svg?react';
import { ContentData } from '../../../utils/constants';

export default function Content() {
  return (
    <section className="content">
      <div className="content__text">
        <h2 className="content__title">{ContentData.title}</h2>
        <h2 className="content__title">{ContentData.titlePhrase}</h2>
        <p className="content__subtitle">{ContentData.subtitle}</p>
        <SumbitBtn title="Explore the Orchard" width="180px" />
      </div>

      <div className="content__image">
        <MelonImg className="content__picture" />
        <StrawberryImg className="content__picture" />
        <BlueBettyImg className="content__picture" />
        <OrangeImg className="content__picture" />
        <LimeImg className="content__picture" />
        <AppleImg className="content__picture" />
      </div>
    </section>
  );
}

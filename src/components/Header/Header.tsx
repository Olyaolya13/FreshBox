import './Header.css';
import Navigation from '../Navigation/Navigation';
import LogoHeader from '../../assets/LogoHeader.svg?react';
import Cart from '../../assets/Cart.svg?react';
import { HeaderData } from '../../utils/constants';

export default function Header() {
  return (
    <section className="header">
      <div className="header__logo">
        <LogoHeader className="header__icon" />
        <h1 className="header__title">{HeaderData.logo}</h1>
      </div>
      <Navigation />
      <Cart className="header__basket" />
    </section>
  );
}

import './Header.css';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import LogoHeader from '../../assets/LogoHeader.svg?react';
import Cart from '../../assets/Cart.svg?react';
import Account from '../../assets/Account.svg?react';
import { HeaderData } from '../../utils/constants';

export default function Header() {
  return (
    <section className="header">
      <div className="header__logo">
        <LogoHeader className="header__icon" />
        <h1 className="header__title header__title-friut">{HeaderData.friut}</h1>
        <h1 className="header__title header__title-box">{HeaderData.box}</h1>
      </div>
      <HeaderNavigation />
      <div className="header__user">
        <Account className="header__account" />
        <Cart className="header__basket" />
      </div>
    </section>
  );
}

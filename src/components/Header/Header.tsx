import './Header.css';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import Cart from '../../assets/Cart.svg?react';
import Account from '../../assets/Account.svg?react';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <section className="header">
      <Logo />
      <HeaderNavigation />
      <div className="header__user">
        <Account className="header__account" />
        <Cart className="header__basket" />
      </div>
    </section>
  );
}

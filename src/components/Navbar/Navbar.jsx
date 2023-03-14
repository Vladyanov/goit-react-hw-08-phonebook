import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

import { isUserLogin } from '../../redux/auth/auth-selector';

import css from './navbar.module.css';

import items from './items';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;

  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.navbar}>
      <ul className={css.menu}>{elements}</ul>
      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}
    </div>
  );
};

export default Navbar;

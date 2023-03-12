import { NavLink } from 'react-router-dom';

import NavbarAuth from './NavbarAuth/NavbarAuth';

import css from './navbar.module.css';

import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.container}>
      <div className={css.navbar}>
        <ul className={css.menu}>{elements}</ul>
        <NavbarAuth />
      </div>
    </div>
  );
};

export default Navbar;

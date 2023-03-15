import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selector';

import css from './user-menu.module.scss';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <span className={css.text}>Hi, {email}! </span>
      <button className={css.btn} onClick={onLogout}>
        <div className={css.logout}>Logout</div>
      </button>
    </div>
  );
};

export default UserMenu;

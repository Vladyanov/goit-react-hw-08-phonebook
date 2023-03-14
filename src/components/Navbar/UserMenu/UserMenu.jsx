import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selector';

// import css from './user-menu.module.scss';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>{email}, </span>
      <button className=".btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

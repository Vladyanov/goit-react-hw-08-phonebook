import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selector';

import css from './user-menu.module.scss';

const UserMenu = () => {
  const { email } = useSelector(getUser);

  return (
    <div>
      <span>{email}, </span>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;

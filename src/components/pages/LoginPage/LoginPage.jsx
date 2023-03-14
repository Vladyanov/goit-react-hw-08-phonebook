import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import LoginForm from 'module/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;

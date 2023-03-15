import logo from '../../../shared/img/logo.jpg';
import css from './home-page.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={css.wrapper}>
        <img src={logo} alt="logo" width="300px" height="300px" />
        <h1 className={css.title}>Welcome to the Phone Book App!</h1>
      </div>
    </>
  );
};

export default HomePage;

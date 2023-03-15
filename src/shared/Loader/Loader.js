import { Oval } from 'react-loader-spinner';
import css from './loader.module.scss';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <Oval
        ariaLabel="loading-indicator"
        height={70}
        width={70}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="teal"
      />
    </div>
  );
};

export default Loader;

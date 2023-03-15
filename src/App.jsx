import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from 'module/AuthLayout/AuthLayout';
import Navbar from 'components/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { store, persistor } from './redux/store';
import Loader from 'shared/Loader/Loader';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <Navbar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;

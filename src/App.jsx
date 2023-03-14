import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from 'module/AuthLayout/AuthLayout';
import Navbar from 'components/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { store, persistor } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <Navbar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;

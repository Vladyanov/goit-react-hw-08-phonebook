import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'module/PrivateRoute/PrivateRoute';
import PublicRoute from 'module/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./components/pages/HomePage/HomePage'));
const PhoneBook = lazy(() => import('./components/PhoneBook/PhoneBook'));
const RegisterPage = lazy(() =>
  import('./components/pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('./components/pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhoneBook />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;

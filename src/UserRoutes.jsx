import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const PhoneBook = lazy(() => import('./components/PhoneBook/PhoneBook'));
const RegisterPage = lazy(() =>
  import('./components/pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('./components/pages/LoginPage/LoginPage'));
// const MyBooksPage = lazy(() => import("./pages/MyBooksPage/MyBooksPage"));
// const MyFavoriteBooksPage = lazy(() => import("./pages/MyFavoriteBooksPage/MyFavoriteBooksPage"));
// const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
// const RegisterPage = lazy(()=> import("./pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(()=> import("./pages/LoginPage/LoginPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/contacts" element={<PhoneBook />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;

import Header from '@/Common/Layout/Header/header';
import Footer from '@/Common/Layout/Footer/footer';
import Join from '@/Common/Form/Signup/signup';
import Login from '@/Common/Form/Signin/signin';
import CartPage from '@/Components/Views/CartPage/CartPage';
import MyPage from '@/Components/Views/MyPage/MyPage';
import PrivatePage from './privateRoute';
import DetailPage from '@/Components/Views/DetailPage/DetailPage';
import UserInfo from '@/Components/Views/MyPage/UserInfo';
import SearchPage from '@/Components/Views/SearchPage/SearchPage';
import { Suspense } from 'react';
import { Routes, BrowserRouter, Route, Outlet } from 'react-router-dom';
import LoadingSpin from '@/Common/Loading/loadingSpinner';
import React from 'react';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const MainPage = React.lazy(
  () => import('../Components/Views/MainPage/MainPage')
);

function RoutesPage() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpin />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="/join" element={<Join />} />
              <Route path="/login" element={<Login />} />
              <Route path="/detail/:productNo" element={<DetailPage />} />
              <Route path="/search/:keyword" element={<SearchPage />} />
              <Route
                path="/cart"
                element={<PrivatePage component={<CartPage />} />}
              />
              <Route
                path="/mypage"
                element={<PrivatePage component={<MyPage />} />}
              />
              <Route
                path="/mypage/userinfo"
                element={<PrivatePage component={<UserInfo />} />}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default RoutesPage;

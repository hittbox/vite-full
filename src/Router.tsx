import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AxiosTemplate from './templates/axios/AxiosTemplate';
import LoginTemplate from './templates/axios/LoginTemplate';
import ZustandTemplate from './templates/zustand/ZustandTemplate';
import RouteTemplate from './templates/route/RouteTemplate';
import ShopHome from './pages/ShopHome';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import TopBar from './shared/components/TopBar';
import ProductDetail from './pages/ProductDetail';
import ProductCreate from './pages/ProductCreate';
import ProductModify from './pages/ProductModify';

const Router = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        {/* shopping mall */}
        <Route path="/" element={<ShopHome />} />
        <Route path="/shop/detail/:id" element={<ProductDetail />} />
        <Route path="/shop/new" element={<ProductCreate />} />
        <Route path="/shop/modify/:id" element={<ProductModify />} />

        {/* shopping mall user */}
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />

        {/* templates */}
        <Route path="/route-template" element={<RouteTemplate />} />
        <Route path="/axios-template" element={<AxiosTemplate />} />
        <Route path="/login-template" element={<LoginTemplate />} />
        <Route path="/zustand" element={<ZustandTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

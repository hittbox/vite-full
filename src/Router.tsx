import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './templates/route/RouteTemplate';
import AxiosTemplate from './templates/axios/AxiosTemplate';
import LoginTemplate from './templates/axios/LoginTemplate';
import ZustandTemplate from './templates/zustand/ZustandTemplate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/axios-template" element={<AxiosTemplate />} />
        <Route path="/login-template" element={<LoginTemplate />} />
        <Route path="/zustand" element={<ZustandTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

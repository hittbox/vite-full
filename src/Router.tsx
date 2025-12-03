import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AxiosTemplate from './templates/axios/AxiosTemplate';
import LoginTemplate from './templates/axios/LoginTemplate';
import Home from './templates/route/RouteTemplate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/axios-template" element={<AxiosTemplate />} />
        <Route path="/login-template" element={<LoginTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

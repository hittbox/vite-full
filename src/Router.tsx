import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { ZustandPage } from './templates/ZustandTemplate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/zustand" element={<ZustandPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

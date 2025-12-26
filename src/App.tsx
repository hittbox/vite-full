import { ToastContainer } from 'react-toastify';
import Router from './Router';

// 루트 컴포넌트
function App() {
  return (
    <>
      <Router />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;

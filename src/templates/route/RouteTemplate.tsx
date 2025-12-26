import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="text-2xl text-blue-500">Home</div>
      <div className="text-green-500">Welcome to the Home Page!</div>

      <Link to="/login-template" className="cursor-pointer border">
        Go to Login (정적 이동)
      </Link>
      <div className="cursor-pointer border" onClick={() => nav('/axios-template')}>
        Go to Axios (동적/조건부 이동)
      </div>
    </>
  );
};

export default Home;

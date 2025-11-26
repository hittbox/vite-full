import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="text-blue-500 text-2xl">Home</div>
      <div className="text-green-500">Welcome to the Home Page!</div>

      <Link to="/about" className="border cursor-pointer">
        Go to About 1 (정적 이동)
      </Link>
      <div className="border cursor-pointer" onClick={() => nav("/about")}>
        Go to About 2 (동적/조건부 이동)
      </div>
    </>
  );
};

export default Home;

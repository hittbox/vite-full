import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="text-red-500 text-2xl">About</div>
      <div className="text-green-500">Welcome to the About Page!</div>
      <Link to="/" className="border cursor-pointer">
        Go to Home
      </Link>
    </>
  );
};

export default About;

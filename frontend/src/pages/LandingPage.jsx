import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <Link to={"/login"} className="bg-red-200">
        Login
      </Link>
      <Link to={"/register"} className="bg-red-300">
        Register
      </Link>
      <Link to={"/home"} className="bg-red-500 mt-6">
        Home
      </Link>
    </div>
  );
};

export default LandingPage;

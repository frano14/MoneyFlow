import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to={"/"} className="bg-red-200">
        Back
      </Link>
    </div>
  );
};

export default Home;

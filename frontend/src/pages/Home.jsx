/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");

    axios
      .get("http://localhost:5555/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <p>Home</p>
      <Link to={"/"} className="bg-red-200">
        Back
      </Link>
      <p>{user?.firstname}</p>

      <LogoutButton />
    </div>
  );
};

export default Home;

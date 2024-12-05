/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import isTokenExpired from "../utils/authUtils";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    const res = isTokenExpired(token);

    if (!res) {
      navigate("/home");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5555/api/auth/login", {
        username,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("JWT_TOKEN", token);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex w-screen h-screen backgroundImage justify-center items-center">
        <div className="bg-gray w-[60%] p-2 flex rounded-md">
          <div className="w-[50%] bg-green rounded-md flex flex-col justify-between items-center text-white px-6 py-4">
            <div className="flex justify-between items-center w-full">
              <p className="titlesFont text-[24px]">MoneyFlow</p>
              <Link
                to={"/"}
                className="bg-white bg-opacity-40 px-2 rounded-full"
              >
                <p>Back to website &rarr;</p>
              </Link>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-center mb-8 text-[20px]">
                Manage Every Transaction,
                <br />
                Master Your Financial Journey
              </p>
              <div className="flex items-center gap-2">
                <Link
                  className="bg-white bg-opacity-60 w-8 h-[2px] rounded-full"
                  to="/register"
                ></Link>
                <div className="bg-white w-8 h-[6px] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[50%] p-10">
            <h1 className="titlesFont text-white text-[32px]">Log in</h1>
            <p className="text-textgray text-[14px] mt-4 mb-8">
              Don't have an account?{" "}
              <Link to="/register" className="text-green underline">
                Sign up
              </Link>
            </p>

            <input
              type="text"
              className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray rounded-md py-2 px-4 text-white mt-4 w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />

            <input
              type="password"
              className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray rounded-md py-2 px-4 text-white mt-4 mb-8 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <Button text="Log in" handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

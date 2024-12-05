/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import isTokenExpired from "../utils/authUtils";
import Button from "../components/Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cashamount, setCashamount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    const res = isTokenExpired(token);

    if (!res) {
      navigate("/home");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5555/api/auth/register", {
        username,
        firstname,
        lastname,
        mail,
        password,
        cardsamount: 0,
        cashamount,
        total: cashamount,
        role: "user",
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex w-screen h-screen backgroundImage justify-center items-center">
      <div className="bg-gray w-[60%] p-2 flex rounded-md">
        <div className="w-[50%] bg-green rounded-md flex flex-col justify-between items-center text-white px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <p className="titlesFont text-[24px]">MoneyFlow</p>
            <Link to={"/"} className="bg-white bg-opacity-40 px-2 rounded-full">
              <p>Back to website &rarr;</p>
            </Link>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-center mb-8 text-[20px]">
              Tracking Your Finances,
              <br />
              Empowering Your Future
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-white w-8 h-[6px] rounded-full"></div>
              <Link
                to="/login"
                className="bg-white bg-opacity-60 w-8 h-[2px] rounded-full"
              ></Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] p-10">
          <h1 className="titlesFont text-white text-[32px]">
            Create an account
          </h1>
          <p className="text-textgray text-[14px] mt-4 mb-8">
            Already have an account?{" "}
            <Link to="/login" className="text-green underline">
              Log in
            </Link>
          </p>
          <div className="w-full flex items-center justify-between gap-4 ">
            <input
              type="text"
              className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray w-[50%] rounded-md py-2 px-4 text-white"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First name"
            />
            <input
              type="text"
              className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray w-[50%] rounded-md py-2 px-4 text-white"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <input
            type="text"
            className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray rounded-md py-2 px-4 text-white mt-4 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="text"
            className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray rounded-md py-2 px-4 text-white mt-4 w-full"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray rounded-md py-2 px-4 text-white mt-4 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <input
            type="Number"
            className="focus:outline-none focus:outline-green bg-lightgray placeholder:text-textgray rounded-md py-2 px-4 text-white mt-4 w-full  appearance-none"
            value={cashamount}
            onChange={(e) => setCashamount(e.target.value)}
            placeholder="Total cash amount"
          />
          <p className="mb-8 text-[12px] text-textgray">
            Enter total cash amount
          </p>
          <Button text="Create account" handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Register;

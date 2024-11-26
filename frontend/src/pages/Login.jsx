/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("admin");
  const navigate = useNavigate();

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
      });
  };

  return (
    <div>
      <p className="mb-12">Login</p>

      <form className="flex flex-col">
        <label htmlFor="Username">username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-green-300 mb-4"
        />

        <label htmlFor="passwprd">password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-green-300 mb-4"
        />
        <button className="bg-green-600" onClick={handleSubmit}>
          login
        </button>
      </form>

      <Link to={"/"} className="bg-red-200">
        Back
      </Link>
    </div>
  );
};

export default Login;

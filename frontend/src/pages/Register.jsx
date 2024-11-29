/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import isTokenExpired from "../utils/authUtils";

const Register = () => {
  const [username, setUsername] = useState("admin");
  const [firstname, setFirstname] = useState("firstname");
  const [lastname, setLastname] = useState("lastname");
  const [mail, setMail] = useState("mail@gmail.com");
  const [password, setPassword] = useState("admin");
  const [cashamount, setCashamount] = useState(950);
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
    <div>
      <p className="mb-12">Register</p>
      <form className="flex flex-col">
        <label htmlFor="username">username</label>
        <input
          type="text"
          className="bg-sky-300 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="firstname">firstname</label>
        <input
          type="text"
          className="bg-sky-300 mb-4"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          className="bg-sky-300 mb-4"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="mail">mail</label>
        <input
          type="text"
          className="bg-sky-300 mb-4"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          className="bg-sky-300 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="cash">cash</label>
        <input
          type="Number"
          className="bg-sky-300 mb-4"
          value={cashamount}
          onChange={(e) => setCashamount(e.target.value)}
        />

        <button className="bg-sky-600" onClick={handleSubmit}>
          save
        </button>
      </form>

      <Link to={"/"} className="bg-red-200">
        Back
      </Link>
    </div>
  );
};

export default Register;

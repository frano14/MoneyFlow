/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardTypes from "../constants";
import axios from "axios";

const CreateCard = () => {
  const [cardnumber, setCardnumber] = useState(0);
  const [type, setType] = useState("");
  const [expiredate, setExpiredate] = useState(Date);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("JWT_TOKEN");

    axios
      .post(
        "http://localhost:5555/api/card/create",
        {
          cardnumber,
          type,
          expiredate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="mb-4">add card</h1>
      <form className="flex flex-col">
        <label htmlFor="cardnumber">cardnumber</label>
        <input
          type="Number"
          value={cardnumber}
          onChange={(e) => setCardnumber(e.target.value)}
          className="bg-lime-300 mb-2"
        />

        <label htmlFor="type">type</label>
        <select
          className="bg-lime-300 mb-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {CardTypes.map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </select>

        <label htmlFor="expiredate">expire date</label>
        <input
          type="Date"
          value={expiredate}
          onChange={(e) => setExpiredate(e.target.value)}
          className="bg-lime-300 mb-2"
        />
        <button className="bg-lime-600 text-white" onClick={handleSubmit}>
          add card
        </button>
      </form>
    </div>
  );
};

export default CreateCard;

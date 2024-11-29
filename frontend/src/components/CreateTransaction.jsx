import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const CreateTransaction = () => {
  const [amount, setAmount] = useState(1200);
  const [transactiondate, setTransactiondate] = useState("");
  const [category, setCategory] = useState("cash");
  const [card, setCard] = useState("");

  const usercards = useSelector((state) => state.card.cards[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("JWT_TOKEN");
    console.log(amount, transactiondate, category, card);
    axios
      .post(
        "http://localhost:5555/api/transaction/create",
        {
          amount,
          transactiondate,
          category,
          card,
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
    <div className="mt-12">
      <h1 className="mb-4">add transaction</h1>
      <form className="flex flex-col">
        <label htmlFor="amount">amount</label>
        <input
          type="Number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-yellow-300 mb-2"
        />

        <label htmlFor="date">date</label>
        <input
          type="Date"
          value={transactiondate}
          onChange={(e) => setTransactiondate(e.target.value)}
          className="bg-yellow-300 mb-2"
        />

        <label htmlFor="category">category</label>
        <select
          className="bg-yellow-300 mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>cash</option>
          <option disabled={usercards?.length === 0}>card</option>
        </select>

        {category === "card" && usercards?.length > 0 && (
          <>
            <label htmlFor="cards">select card</label>
            <select
              className="bg-yellow-300 mb-2"
              value={card}
              onChange={(e) => setCard(e.target.value)}
            >
              {usercards?.map((card, index) => (
                <option
                  key={index}
                  value={card._id}
                >{`${card.type}, ${card.cardnumber}`}</option>
              ))}
            </select>
          </>
        )}
        <button onClick={handleSubmit} className="bg-yellow-600 text-white">
          save
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;

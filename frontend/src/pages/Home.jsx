/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { addCard } from "../redux/slices/cardSlice";
import LogoutButton from "../components/LogoutButton";
import CreateCard from "../components/CreateCard";
import Cards from "../components/Cards";
import CreateTransaction from "../components/createTransaction";
import { addTransaction } from "../redux/slices/transactionSlice";
import Transactions from "../components/Transactions";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    setLoading(true);

    axios
      .get("http://localhost:5555/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { cards, transactions, ...user } = res.data;
        dispatch(setUser(user));
        dispatch(
          addCard(
            cards.map((card) => ({
              _id: card._id,
              cardnumber: card.cardnumber,
              type: card.type,
              expiredate: card.expiredate,
            }))
          )
        );
        dispatch(addTransaction(transactions));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p className="mb-12">Home</p>
      <div className=" flex justify-between items-start">
        <Link to={"/"} className="bg-red-200">
          Back
        </Link>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className="flex flex-col">
            <p>{user?.username}</p>
            <p>{user?.firstname}</p>
            <p>{user?.lastname}</p>
            <p>{user?.mail}</p>
            <p>{user?.cardsamount}</p>
            <p>{user?.cashamount}</p>
            <p>{user?.total}</p>
            <p>{user?.role}</p>
            <Cards />
            <Transactions />
          </div>
        )}
        <CreateCard />
        <LogoutButton />
      </div>
      <CreateTransaction />
    </div>
  );
};

export default Home;

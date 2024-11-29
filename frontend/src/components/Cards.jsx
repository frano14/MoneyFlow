import { useSelector } from "react-redux";

const Cards = () => {
  const cards = useSelector((state) => state.card.cards[0]);

  return (
    <div>
      <h1 className="mb-4">cards list</h1>
      {cards?.map((card, index) => (
        <div key={index} className="flex gap-2">
          <p>{card.type}</p>
          <p>{card.cardnumber}</p>
          <p>{card.balance}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

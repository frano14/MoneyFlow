import { useSelector } from "react-redux";

const Transactions = () => {
  const transactions = useSelector((state) => state.transaction.transactions);
  const cards = useSelector((state) => state.card.cards[0]);
  {
    console.log(cards);
    console.log(transactions);
  }
  return (
    <div className="mt-4">
      {transactions?.map((transaction, index) => {
        const filteredCard = cards?.filter((card) => {
          return card._id === transaction.card;
        });
        {
          console.log(filteredCard);
        }
        return (
          <div key={index}>
            <p>{`${transaction?.amount}, ${transaction?.category} ${transaction?.transactiondate}`}</p>
            <p>{`${filteredCard[0]?.type}, ${filteredCard[0]?.cardnumber} `}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;

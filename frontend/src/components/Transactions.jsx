import { useSelector } from "react-redux";

const Transactions = () => {
  const transactions = useSelector((state) => state.transaction.transactions);
  const cards = useSelector((state) => state.card.cards[0]);

  return (
    <div className="mt-4">
      {transactions?.map((transaction, index) => {
        const filteredCard = cards?.filter((card) => {
          return card._id === transaction.card;
        });

        return (
          <div key={index}>
            <p>{`${transaction?.amount}, ${transaction?.category} ${transaction?.transactiondate}`}</p>
            {filteredCard.length !== 0 && (
              <p>{`${filteredCard[0]?.type}, ${filteredCard[0]?.cardnumber} `}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;

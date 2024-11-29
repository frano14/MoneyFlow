import Card from "../models/cardModel.js";
import { Transaction } from "../models/transactionModel.js";
import User from "../models/userModel.js";

const createtransaction = async (req, res) => {
  try {
    const owner = req.user.id;
    const { amount, category, transactiondate, card } = req.body;
    console.log(amount, category, transactiondate, card);
    if (!owner || !amount || !category || !transactiondate) {
      res.status(404).json({ message: "all filed are required" });
    }

    const newTransaction = await Transaction.create({
      amount,
      category,
      transactiondate,
      owner,
      ...(card && { card }),
    });

    const currentUser = await User.findById(owner);
    console.log(currentUser);

    currentUser.transactions.push(newTransaction);
    currentUser.total -= newTransaction.amount;
    if (card) {
      currentUser.cardsamount -= newTransaction.amount;
      const currentCard = await Card.findById(card);
      currentCard.balance -= newTransaction.amount;
      currentCard.save();
    } else currentUser.cashamount -= newTransaction.amount;

    await currentUser.save();

    res.status(200).json(newTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default createtransaction;

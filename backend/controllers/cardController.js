import Card from "../models/cardModel.js";
import User from "../models/userModel.js";

const createcard = async (req, res) => {
  try {
    const user = req.user.id;
    const { cardnumber, type, expiredate, balance } = req.body;

    if (!user || !cardnumber || !type || !expiredate) {
      res.status(404).json({ message: "all filed are required" });
    }

    const newCard = await Card.create({
      user,
      cardnumber,
      type,
      expiredate,
      balance,
    });

    const currentUser = await User.findById(user);

    currentUser.cards.push(newCard._id);
    currentUser.cardsamount += newCard.balance;
    currentUser.total += newCard.balance;

    await currentUser.save();

    res.status(200).json({ message: `Card created, ${cardnumber}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default createcard;

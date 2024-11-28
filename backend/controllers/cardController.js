import Card from "../models/cardModel.js";
import User from "../models/userModel.js";

const createcard = async (req, res) => {
  try {
    const user = req.user.id;
    const { cardnumber, type, expiredate } = req.body;

    if (!user || !cardnumber || !type || !expiredate) {
      res.status(404).json({ message: "all filed are required" });
    }

    const newCard = await Card.create({ user, cardnumber, type, expiredate });

    await User.findByIdAndUpdate(
      user,
      { $push: { cards: newCard._id } },
      { new: true }
    );

    res.status(200).json({ message: `Card created, ${cardnumber}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default createcard;

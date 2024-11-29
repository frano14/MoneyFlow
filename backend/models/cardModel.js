import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cardnumber: {
    type: Number,
    required: true,
    min: [1000, "Card number must be greater than 999"],
    max: [9999, "Card number must be less than 10000"],
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "Visa",
      "Mastercard",
      "American Express",
      "Discover",
      "Diners Club",
      "UnionPay",
      "JCB",
    ],
  },
  expiredate: { type: Date, require: true },
  balance: { type: Number, require: true },
});

const Card = mongoose.model("Card", cardSchema);
export default Card;

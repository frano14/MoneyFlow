import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true, enum: ["cash", "card"] },
  transactiondate: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card",
  },
});

export const Transaction = mongoose.model("Transaction", transactionSchema);

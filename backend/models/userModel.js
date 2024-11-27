import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, require: true, unique: true },
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  mail: { type: String, require: true },
  password: { type: String, require: true },
  cardsamount: { type: Number, require: true },
  cashamount: { type: Number, require: true },
  total: { type: Number, require: true },
  role: { type: String, require: true, enum: ["user", "admin"] },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
});

const User = mongoose.model("User", userSchema);
export default User;

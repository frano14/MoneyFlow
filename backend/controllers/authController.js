import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
  try {
    const {
      username,
      firstname,
      lastname,
      mail,
      password,
      cardsamount,
      cashamount,
      total,
      role,
    } = req.body;

    if (
      !username ||
      !firstname ||
      !lastname ||
      !mail ||
      !password ||
      (!cardsamount && cardsamount != 0) ||
      (!cashamount && cashamount != 0) ||
      (!total && total != 0) ||
      !role
    ) {
      res.status(404).json({ message: "All filed are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      firstname,
      lastname,
      mail,
      password: hashedPassword,
      cardsamount,
      cashamount,
      total,
      role,
    });

    res.status(200).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const {
      username,
      firstname,
      lastname,
      mail,
      password,
      cardsamount,
      cashamount,
      total,
      role,
    } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      {
        username: user.username,
        role: user.role,
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log(token);

    res.status(200).json({ token, userId: user._id });
  } catch (error) {}
};

export { register, login };

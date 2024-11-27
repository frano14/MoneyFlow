import User from "../models/userModel.js";

const userDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id).populate("cards");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default userDetails;

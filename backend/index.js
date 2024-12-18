import { PORT, MongoDBRL } from "./config.js";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cardRouter from "./routes/cardRoute.js";
import transactionRouter from "./routes/transactionRoute.js";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.status(234).send("Welcome to the MoneyFlow server");
});

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/card", cardRouter);
app.use("/api/transaction", transactionRouter);

mongoose
  .connect(MongoDBRL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log("Server is running on port: " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

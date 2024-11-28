import express from "express";
import createtransaction from "../controllers/transactionController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, createtransaction);

export default router;

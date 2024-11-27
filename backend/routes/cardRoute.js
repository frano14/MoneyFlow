import express from "express";
import verifyToken from "../middlewares/authMiddleware.js";
import createcard from "../controllers/cardController.js";

const router = express.Router();

router.post("/create", verifyToken, createcard);

export default router;

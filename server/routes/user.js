import express from "express";
import { createUser, getUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/profile", getUsers);
router.post("/create", createUser);

export default router;

import { Router } from "express";
import UserModel from "../models/user.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { login, email, password, gender } = req.body;

    const isUserExists = await UserModel.find({ login });
    if (isUserExists) return res.status(400).json("User exists.");

    const encryptedPassword = await bcrypt.hash(password, 10);

    await new UserModel({
      login,
      password: encryptedPassword,
      email,
      gender,
      dateOfBirth: "01-01-2020",
      achievements: [],
    }).save();

    return res.status(201).json("Successfully registered!");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
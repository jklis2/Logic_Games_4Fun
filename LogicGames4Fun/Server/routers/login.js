import { Router } from "express";
import UserModel from "../models/user.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json("Test!");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { login, password } = req.body;
    const foundUser = await UserModel.find({ login });

    if (!foundUser) {
      res.status(403).json("User not found.");
    }

    // if (foundUser.password != password) {
    //   res.status(403).json("Password is incorrect.");
    // }

    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

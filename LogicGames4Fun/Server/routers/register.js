import User from "../models/user.js";
import { Router } from "express";

const router = Router();
const users = [];

router.get("/", (req, res) => {
  res.json({ message: "Register test." });
});

router.post("/", (req, res) => {
  const newUser = new User({
    id: Date.now(),
    login: req.body.login,
    password: req.body.password,
    email: req.body.email,
  });
  users.push(newUser);
  try {
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

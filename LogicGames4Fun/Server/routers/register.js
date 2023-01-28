import User from "../models/user.js";
import { Router } from "express";
import Repository from "../models/repository.js";

const router = Router();
const repository = new Repository()

router.get("/", (req, res) => {
  try{
    res.status(200).json(repository.users)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.post("/", (req, res) => {
  const newUser = new User({
    id: Date.now(),
    login: req.body.login,
    password: req.body.password,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  });
  try {
    repository.users.push(newUser);
    res.status(201).json(` Successfuly registered: ${newUser}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

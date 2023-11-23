import User from "../models/user.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try{
    res.status(200).json('')
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.post("/", (req, res) => {
  const newUser = new User({
    id: Date.now(),
  });
  try {
    repository.users.push(newUser);
    res.status(201).json(` Successfuly registered: ${newUser}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

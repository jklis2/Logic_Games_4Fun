import { Router } from "express";
import Repository from "../models/repository.js";
import User from "../models/user.js";

const router = Router();
const repository = new Repository();

repository.users = [
  new User("test", "test123", "test123@test.test"),
  new User("1", "2", "3@3.z"),
];

router.get("/", (req, res) => {
  res.json(repository.users);
});

router.post("/", (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  try {
    const foundUser = repository.users.find(user => user.login === login)

    if(!foundUser){
        res.status(403).json('User not found.')
    }
    
    if(foundUser.password != password){
        res.status(403).json('Password is incorrect.')
    }
    
    res.status(200).json(`Success!`)
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

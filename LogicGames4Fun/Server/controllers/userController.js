import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";

export async function getUser(req, res) {
  try {
    const header = req.headers["authorization"]?.split(" ")[1];
    if (!header) {
      return res.status(401).json({ message: "No token provided" });
    }

    const user = jwt.decode(header, process.env.secret);
    if (!user || !user.login) {
      return res.status(403).json({ message: "Invalid token" });
    }

    const { login } = user;
    const userFromDatabase = await UserModel.findOne({ login });

    if (!userFromDatabase) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userFromDatabase);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function updateUser(req, res) {
  try {
    const header = req.headers["authorization"]?.split(" ")[1];
    if (!header) throw new Error("No token provided");

    const user = jwt.decode(header, process.env.secret);
    console.log(req.body.path);
    if (!user) throw new Error("Invalid token");

    await UserModel.findOneAndUpdate(
      { login: user.login },
      { path: req.body.path },
      { new: true }
    );

    next();
    res.status(200).json({ message: "Successfuly updated user!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

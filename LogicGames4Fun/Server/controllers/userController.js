import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
    const userFromDatabase = await UserModel.findOne({ login })
      .populate("achievements")
      .populate("scores");

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
    if (!user) throw new Error("Invalid token");

    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }

    await UserModel.findOneAndUpdate(
      { login: user.login },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({ message: "Successfuly updated user!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

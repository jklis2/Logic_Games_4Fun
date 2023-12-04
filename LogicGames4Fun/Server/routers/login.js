import { Router } from "express";
import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const router = Router();
const secretKey = crypto.randomBytes(12).toString("hex");
console.log(secretKey);

router.get("/", async (req, res) => {
  try {
    const header = req.headers["authorization"]?.split(" ")[1];
    console.log(header);
    const user = jwt.decode(header, process.env.secret);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { login, password } = req.body;
    const foundUser = await UserModel.findOne({ login });

    if (!foundUser) {
      return res.status(404).json("User not found.");
    } else if (!(await bcrypt.compare(password, foundUser.password))) {
      return res.status(403).json("Incorrect password");
    }

    const token = jwt.sign(
      {
        login: foundUser.login,
        email: foundUser.email,
      },
      secretKey,
      {
        expiresIn: "4h",
      }
    );
    const refreshToken = jwt.sign(
      { login: foundUser.login, email: foundUser.email },
      secretKey
    );

    return res.status(200).json({ token, refreshToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/refresh", async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.sendStatus(401);

    jwt.verify(refreshToken, secretKey, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({
        login: user.login,
        email: user.email,
      });
      return res.status(200).json({ accessToken });
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
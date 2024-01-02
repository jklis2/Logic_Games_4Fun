import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";
import { secretKey } from "../config/token.js";

export async function register(req, res) {
  try {
    const { login, email, password, gender, path } = req.body;

    if (!(login && email && password)) {
      res.status(400).send("All input is required");
    }

    const isUserExists = await UserModel.findOne({ login });
    if (isUserExists) return res.status(409).json("User exists.");

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await new UserModel({
      login,
      password: encryptedPassword,
      email,
      gender,
      description: "",
      path,
      dateOfBirth: "01-01-2020",
      achievements: [],
      scores: [],
      isAdmin: false,
    }).save();

    const token = jwt.sign(
      {
        login: newUser.login,
      },
      secretKey,
      {
        expiresIn: "4h",
      }
    );

    return res
      .status(201)
      .json({ message: "Successfully registered!", token, login });
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function login(req, res) {
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
        path: foundUser.path,
      },
      secretKey,
      {
        expiresIn: "4h",
      }
    );
    const refreshToken = jwt.sign(
      { login: foundUser.login, email: foundUser.email, path: foundUser.path },
      secretKey
    );

    return res.status(200).json({ token, refreshToken });
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function refreshToken(req, res) {
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
}

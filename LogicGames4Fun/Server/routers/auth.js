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
});

router.post("/register", async (req, res) => {
  try {
    const { login, email, password, gender, path } = req.body;
    console.log(req.body);

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
      path,
      dateOfBirth: "01-01-2020",
      achievements: [],
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
});

router.post("/login", async (req, res) => {
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

router.put("/", async (req, res, next) => {
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
});

export default router;

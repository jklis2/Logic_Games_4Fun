import GameModel from "../models/game.js";

export async function getGame() {}

export async function addGame(req, res) {
  //Check if user is logged and if he is an admin

  //Add game to database;
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: "Name is required" });

  const newGame = await new GameModel({
    name,
  }).save();

  return res.status(201).json({ message: "Success!", newGame });
}

export async function updateGame() {}

export async function removeGame() {}

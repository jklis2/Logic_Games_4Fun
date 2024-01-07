import GameModel from "../models/game.js";

export async function getGames(_, res) {
  try {
    const games = await GameModel.find();
    return res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function addGame(req, res) {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: "Name is required" });

  const newGame = await new GameModel({
    name,
  }).save();

  return res.status(201).json({ message: "Success!", newGame });
}

export async function updateGame(req, res) {
  try {
    const { name } = req.params;
    const { newName } = req.body;

    await GameModel.findOneAndUpdate(
      { name },
      { $set: { name: newName } },
      { new: true }
    );

    res.status(200).json({ message: "Successfuly updated user!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function removeGame(req, res) {
  try {
    const { name } = req.params;

    const deletedGame = await GameModel.findOneAndDelete({ name });

    if (!deletedGame) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.status(200).json({ message: "Game deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

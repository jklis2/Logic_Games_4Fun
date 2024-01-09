import AchievementModel from "../models/achievement.js";

export async function getAchievements(_, res) {
  try {
    const achievements = await AchievementModel.find().populate("game");
    return res.status(200).json(achievements);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export async function addAchievement(req, res) {
  const newAchievement = new AchievementModel({
    name: req.body.name,
    game: req.body.game,
    difficulty: req.body.difficulty,
    requiredScore: req.body.requiredScore,
    imgPath: req.body.imgPath,
    alt: req.body.alt,
  });

  try {
    newAchievement.save();
    return res.status(201).json(newAchievement);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export async function awardAchievement(req, res) {

}

export async function removeAchievement(req, res) {}

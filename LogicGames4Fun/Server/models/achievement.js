import mongoose from "mongoose";

export const AchievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 100,
  },
  game: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
  difficulty: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 255,
  },
  alt: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
});

const AchievementModel = mongoose.model("Achievement", AchievementSchema);
export default AchievementModel;

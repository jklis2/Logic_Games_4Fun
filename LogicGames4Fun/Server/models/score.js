import mongoose from "mongoose";

export const ScoreSchema = new mongoose.Schema({
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard", "impossible", "none"],
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
});

const ScoreModel = mongoose.model("Score", ScoreSchema);
export default ScoreModel;

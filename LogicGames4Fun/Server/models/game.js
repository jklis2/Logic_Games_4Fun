import mongoose from "mongoose";

export const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 40,
  },
});


const GameModel = mongoose.model("Game", GameSchema);
export default GameModel;
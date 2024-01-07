import { Router } from "express";
import {
  getGames,
  addGame,
  updateGame,
  removeGame,
} from "../controllers/gameController.js";

const router = Router();

router.get("/", getGames);
router.post("/", addGame);
router.put("/:name", updateGame);
router.delete("/:name", removeGame);

export default router;

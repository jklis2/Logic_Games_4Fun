import { Router } from "express";
import {
  addAchievement,
  awardAchievement,
  getAchievements,
  removeAchievement,
} from "../controllers/achievementController.js";
import { isAuth } from "../utils/authentication.js";

const router = Router();

router.get("/", isAuth, getAchievements);
router.post("/", addAchievement);
router.post("/award", awardAchievement);
router.delete("/", removeAchievement);

export default router;

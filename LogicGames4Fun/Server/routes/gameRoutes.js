import { Router } from "express";
import { addGame } from "../controllers/gameController.js";

const router = Router();

router.post("/", addGame);

export default router;

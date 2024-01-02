import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController.js";

const router = Router();

router.get("/", getUser);
router.put("/", updateUser);

export default router;
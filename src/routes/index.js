import { Router } from "express";
import { getHealth } from "../controllers/health.controller.js";
import validate from "../validation/index.js";

const router = Router();

router.get("/health", validate, getHealth);

export default router;

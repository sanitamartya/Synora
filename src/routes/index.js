import { Router } from "express";
import { getHealth } from "../controllers/health.controller.js";
import { createUser } from "../controllers/user.controller.js";
import { asyncHandler } from "../shared/asyncHandler.js";

const router = Router();

router.get("/health", asyncHandler(getHealth));

router.post("/users", asyncHandler(createUser));

export default router;

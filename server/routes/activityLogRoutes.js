import express from "express";
import { getActivityLogs } from "../controllers/activityLogController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(auth);

router.get("/", getActivityLogs);

export default router;
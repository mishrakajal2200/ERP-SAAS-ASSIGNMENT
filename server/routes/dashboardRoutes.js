import express from "express"
import { dashboard } from "../controllers/dashboardController.js";
import auth from "../middleware/authMiddleware.js";
import tenantMiddleware from "../middleware/tenantMiddleware.js";

const router = express.Router();

router.get(
    "/",
    auth,
    tenantMiddleware,
    dashboard
);
export default router;

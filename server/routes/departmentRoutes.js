import express from "express";
import * as controller from "../controllers/departmentController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(auth);

router.post("/", controller.createDepartment);
router.get("/", controller.getDepartments);

export default router;
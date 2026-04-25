import express from "express";
import * as controller from "../controllers/projectController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(auth);

router.post("/", controller.createProject);
router.get("/", controller.getProjects);
router.put("/:id", controller.updateProject);
router.delete("/:id", controller.deleteProject);

export default router;
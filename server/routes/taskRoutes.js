import express from "express";
import * as controller from "../controllers/taskController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(auth);

router.post("/", controller.createTask);
router.get("/", controller.getTasks);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);

export default router;
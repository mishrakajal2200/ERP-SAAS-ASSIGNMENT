import express from "express";
import * as userController from "../controllers/userController.js";
import auth from "../middleware/authMiddleware.js";
import { createUserValidator } from "../validatores/userValidator.js";
import validate from "../middleware/validateMiddleware.js";

const router = express.Router();

router.use(auth);

router.post("/", createUserValidator, validate, userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
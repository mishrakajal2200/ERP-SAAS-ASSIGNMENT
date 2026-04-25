import express from "express";
import {
  registerCompany,
  login,
  getMe,
} from "../controllers/authController.js";
import { registerValidator, loginValidator } from "../validatores/authValidator.js";
import validate from "../middleware/validateMiddleware.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register-company", registerValidator, validate, registerCompany);
router.post("/login", loginValidator, validate, login);
router.get("/me", auth, getMe);

export default router;
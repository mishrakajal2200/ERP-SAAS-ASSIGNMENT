import express from "express";

import { search } from "../controllers/search.controller.js";

import  auth  from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, search);

export default router;
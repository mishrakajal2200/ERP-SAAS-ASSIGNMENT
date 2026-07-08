import express from "express";
import * as controller from "../controllers/companyController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(auth);

router.get("/", controller.getCompany);
router.put("/", controller.updateCompany);


export default router;
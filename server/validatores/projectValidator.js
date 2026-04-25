import { body } from "express-validator";

export const createProjectValidator = [
  body("name").notEmpty().withMessage("Project name required"),
  body("description").optional(),
];

export const updateProjectValidator = [
  body("name").optional(),
  body("status").optional(),
];
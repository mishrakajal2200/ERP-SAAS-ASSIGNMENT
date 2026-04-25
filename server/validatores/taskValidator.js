import { body } from "express-validator";

export const createTaskValidator = [
  body("title").notEmpty().withMessage("Task title required"),
  body("projectId").notEmpty().withMessage("Project ID required"),
];

export const updateTaskValidator = [
  body("title").optional(),
  body("status").optional(),
]; 
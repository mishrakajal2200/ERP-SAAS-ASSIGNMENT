import { body } from "express-validator";

export const createUserValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 6 }),
  body("role").notEmpty().withMessage("Role is required"),
];

export const updateUserValidator = [
  body("name").optional(),
  body("email").optional().isEmail(),
  body("role").optional(),
];
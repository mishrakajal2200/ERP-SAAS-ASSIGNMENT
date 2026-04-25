import { body } from "express-validator";

export const updateCompanyValidator = [
  body("name").optional(),
  body("address").optional(),
];
import { body } from 'express-validator';

export const registerSchema = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('name').trim().notEmpty(),
  body('role').isIn(['admin', 'resident', 'security']).optional()
];

export const loginSchema = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
];
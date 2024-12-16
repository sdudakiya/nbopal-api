import { body } from 'express-validator';

export const updateProfileSchema = [
  body('name').trim().notEmpty().optional(),
  body('phone_number').matches(/^\+?[\d\s-]+$/).optional(),
  body('apartment_number').trim().notEmpty().optional()
];

export const emergencyContactSchema = [
  body('name').trim().notEmpty(),
  body('phone_number').matches(/^\+?[\d\s-]+$/).notEmpty(),
  body('relationship').trim().notEmpty()
];
import { body } from 'express-validator';

export const visitorEntrySchema = [
  body('name').trim().notEmpty(),
  body('purpose').trim().notEmpty(),
  body('phoneNumber').matches(/^\+?[\d\s-]+$/).optional(),
  body('expectedDuration').isInt({ min: 1 }).optional()
];
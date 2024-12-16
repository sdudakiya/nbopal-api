import { body } from 'express-validator';

export const vehicleSchema = [
  body('registration_number').trim().notEmpty(),
  body('vehicle_type').isIn(['car', 'bike', 'other']).notEmpty(),
  body('is_resident').isBoolean().optional()
];
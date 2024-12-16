import { body } from 'express-validator';

export const notificationSchema = [
  body('title').trim().notEmpty(),
  body('message').trim().notEmpty(),
  body('type').isIn(['visitor', 'emergency', 'announcement', 'other']).notEmpty(),
  body('user_id').isUUID().optional()
];
import { body, param } from 'express-validator';

export const notificationValidation = {
  create: [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
    body('type')
      .isIn(['visitor', 'emergency', 'announcement', 'other'])
      .withMessage('Invalid notification type'),
    body('user_id').optional().isUUID().withMessage('Invalid user ID')
  ],
  
  markAsRead: [
    param('id').isUUID().withMessage('Invalid notification ID')
  ]
};
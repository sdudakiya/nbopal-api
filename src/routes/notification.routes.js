import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { notificationSchema } from '../validators/notification.validator.js';
import {
  getNotifications,
  markAsRead,
  createNotification
} from '../controllers/notification.controller.js';

const router = express.Router();

router.use(authenticate);

router.get('/', getNotifications);
router.post('/', validate(notificationSchema), createNotification);
router.put('/:id/read', markAsRead);

export default router;
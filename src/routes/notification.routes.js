import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { notificationController, notificationValidation } from '../controllers/notification/index.js';

const router = express.Router();

router.use(authenticate);

router.get('/', notificationController.getNotifications);
router.post('/', validate(notificationValidation.create), notificationController.createNotification);
router.put('/:id/read', validate(notificationValidation.markAsRead), notificationController.markAsRead);

export default router;
import { 
  createNotificationService, 
  getNotificationsService, 
  markNotificationAsReadService 
} from '../services/notification.service.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const getNotifications = async (req, res) => {
  try {
    const notifications = await getNotificationsService(req.user.id);
    return successResponse(res, notifications);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const createNotification = async (req, res) => {
  try {
    const { title, message, type, user_id } = req.body;
    const notification = await createNotificationService({
      title,
      message,
      type,
      user_id: user_id || req.user.id
    });
    return successResponse(res, notification, 'Notification created successfully', 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await markNotificationAsReadService(id, req.user.id);
    return successResponse(res, notification, 'Notification marked as read');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
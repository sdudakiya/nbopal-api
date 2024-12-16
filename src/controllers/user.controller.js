import { 
  getUserById, 
  updateUser, 
  getAllUsersService,
  getEmergencyContactsService,
  addEmergencyContactService 
} from '../services/user.service.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const getUserProfile = async (req, res) => {
  try {
    const user = await getUserById(req.user.id);
    return successResponse(res, user);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await updateUser(req.user.id, req.body);
    return successResponse(res, updatedUser, 'Profile updated successfully');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    return successResponse(res, users);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const getEmergencyContacts = async (req, res) => {
  try {
    const contacts = await getEmergencyContactsService(req.user.id);
    return successResponse(res, contacts);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const addEmergencyContact = async (req, res) => {
  try {
    const contact = await addEmergencyContactService(req.user.id, req.body);
    return successResponse(res, contact, 'Emergency contact added successfully', 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
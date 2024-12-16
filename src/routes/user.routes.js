import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { updateProfileSchema } from '../validators/user.validator.js';
import { 
  getUserProfile, 
  updateUserProfile, 
  getAllUsers,
  getEmergencyContacts,
  addEmergencyContact
} from '../controllers/user.controller.js';

const router = express.Router();

router.use(authenticate);

// User profile routes
router.get('/profile', getUserProfile);
router.put('/profile', validate(updateProfileSchema), updateUserProfile);

// Admin only routes
router.get('/', authorize('admin'), getAllUsers);

// Emergency contacts
router.get('/emergency-contacts', getEmergencyContacts);
router.post('/emergency-contacts', validate(updateProfileSchema), addEmergencyContact);

export default router;
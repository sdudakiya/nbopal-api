import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { staffAttendanceSchema } from '../validators/staff.validator.js';
import {
  checkIn,
  checkOut,
  getAttendanceLog
} from '../controllers/staff.controller.js';

const router = express.Router();

router.use(authenticate);
router.use(authorize('admin', 'security'));

router.post('/check-in', validate(staffAttendanceSchema), checkIn);
router.post('/check-out/:id', checkOut);
router.get('/attendance', getAttendanceLog);

export default router;
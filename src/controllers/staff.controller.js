import { 
  createCheckIn,
  createCheckOut,
  getAttendanceLogs
} from '../services/staff.service.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const checkIn = async (req, res) => {
  try {
    const staffId = req.body.staff_id;
    const attendance = await createCheckIn(staffId);
    return successResponse(res, attendance, 'Staff check-in recorded successfully', 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const checkOut = async (req, res) => {
  try {
    const { id } = req.params;
    const attendance = await createCheckOut(id);
    return successResponse(res, attendance, 'Staff check-out recorded successfully');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const getAttendanceLog = async (req, res) => {
  try {
    const { startDate, endDate, staffId } = req.query;
    const logs = await getAttendanceLogs({ startDate, endDate, staffId });
    return successResponse(res, logs);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
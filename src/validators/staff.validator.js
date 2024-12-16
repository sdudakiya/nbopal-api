import { body } from 'express-validator';

export const staffAttendanceSchema = [
  body('staff_id').isUUID().notEmpty(),
  body('check_in').isISO8601().toDate().optional(),
  body('check_out').isISO8601().toDate().optional()
];
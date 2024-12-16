import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { visitorEntrySchema } from '../validators/visitor.validator.js';
import { createVisitorEntry, getVisitorLogs } from '../controllers/visitor.controller.js';

const router = express.Router();

router.use(authenticate);

router.post('/', validate(visitorEntrySchema), createVisitorEntry);
router.get('/', authorize('admin', 'security'), getVisitorLogs);

export default router;
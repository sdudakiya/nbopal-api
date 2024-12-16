import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { vehicleSchema } from '../validators/vehicle.validator.js';
import {
  registerVehicle,
  getVehicles,
  updateVehicle,
  deleteVehicle
} from '../controllers/vehicle.controller.js';

const router = express.Router();

router.use(authenticate);

router.post('/', validate(vehicleSchema), registerVehicle);
router.get('/', getVehicles);
router.put('/:id', validate(vehicleSchema), updateVehicle);
router.delete('/:id', deleteVehicle);

export default router;
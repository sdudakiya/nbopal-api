import { 
  createVehicle,
  getVehiclesByUser,
  updateVehicleById,
  deleteVehicleById
} from '../services/vehicle.service.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const registerVehicle = async (req, res) => {
  try {
    const vehicleData = {
      ...req.body,
      owner_id: req.user.id
    };
    const vehicle = await createVehicle(vehicleData);
    return successResponse(res, vehicle, 'Vehicle registered successfully', 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await getVehiclesByUser(req.user.id, req.user.role);
    return successResponse(res, vehicles);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await updateVehicleById(id, req.body, req.user);
    return successResponse(res, vehicle, 'Vehicle updated successfully');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteVehicleById(id, req.user);
    return successResponse(res, null, 'Vehicle deleted successfully');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
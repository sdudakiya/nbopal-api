import { supabase } from '../config/supabase.js';
import { USER_ROLES } from '../utils/constants.js';
import { errorResponse } from '../utils/response.js';

export const createVehicle = async (vehicleData) => {
  const { data, error } = await supabase
    .from('vehicles')
    .insert([vehicleData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getVehiclesByUser = async (userId, userRole) => {
  let query = supabase
    .from('vehicles')
    .select(`
      id,
      registration_number,
      vehicle_type,
      is_resident,
      owner_id,
      users:owner_id (
        name,
        apartment_number
      )
    `);

  // If user is not admin, only show their vehicles
  if (userRole !== USER_ROLES.ADMIN) {
    query = query.eq('owner_id', userId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const updateVehicleById = async (vehicleId, updateData, user) => {
  // First check if user has permission to update this vehicle
  const { data: vehicle } = await supabase
    .from('vehicles')
    .select('owner_id')
    .eq('id', vehicleId)
    .single();

  if (!vehicle) {
    throw new Error('Vehicle not found');
  }

  if (vehicle.owner_id !== user.id && user.role !== USER_ROLES.ADMIN) {
    throw new Error('Unauthorized to update this vehicle');
  }

  const { data, error } = await supabase
    .from('vehicles')
    .update(updateData)
    .eq('id', vehicleId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteVehicleById = async (vehicleId, user) => {
  // First check if user has permission to delete this vehicle
  const { data: vehicle } = await supabase
    .from('vehicles')
    .select('owner_id')
    .eq('id', vehicleId)
    .single();

  if (!vehicle) {
    throw new Error('Vehicle not found');
  }

  if (vehicle.owner_id !== user.id && user.role !== USER_ROLES.ADMIN) {
    throw new Error('Unauthorized to delete this vehicle');
  }

  const { error } = await supabase
    .from('vehicles')
    .delete()
    .eq('id', vehicleId);

  if (error) throw error;
};
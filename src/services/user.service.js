import { supabase } from '../config/supabase.js';

export const getUserById = async (userId) => {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, name, role, phone_number, apartment_number')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
};

export const updateUser = async (userId, userData) => {
  const { data, error } = await supabase
    .from('users')
    .update(userData)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getAllUsersService = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, name, role, phone_number, apartment_number');

  if (error) throw error;
  return data;
};

export const getEmergencyContactsService = async (userId) => {
  const { data, error } = await supabase
    .from('emergency_contacts')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data;
};

export const addEmergencyContactService = async (userId, contactData) => {
  const { data, error } = await supabase
    .from('emergency_contacts')
    .insert([{ ...contactData, user_id: userId }])
    .select()
    .single();

  if (error) throw error;
  return data;
};
import { supabase } from '../config/supabase.js';

export const getNotificationsService = async (userId) => {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createNotificationService = async (notificationData) => {
  const { data, error } = await supabase
    .from('notifications')
    .insert([notificationData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const markNotificationAsReadService = async (notificationId, userId) => {
  const { data, error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', notificationId)
    .eq('user_id', userId) // Ensure user can only mark their own notifications as read
    .select()
    .single();

  if (error) throw error;
  return data;
};
import { supabase } from '../../config/supabase.js';
import { notificationQueries } from './queries.js';

export const getNotificationsService = async (userId) => {
  const query = notificationQueries.getAll(userId);
  const { data, error } = await supabase
    .from(query.from)
    .select(query.select)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createNotificationService = async (notificationData) => {
  const query = notificationQueries.create(notificationData);
  const { data, error } = await supabase
    .from(query.from)
    .insert(query.insert)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const markNotificationAsReadService = async (notificationId, userId) => {
  const query = notificationQueries.markAsRead(notificationId, userId);
  const { data, error } = await supabase
    .from(query.from)
    .update(query.update)
    .match(query.match)
    .select()
    .single();

  if (error) throw error;
  return data;
};
import { supabase } from '../config/supabase.js';
import { VISITOR_STATUS } from '../utils/constants.js';

export const createVisitor = async (visitorData) => {
  const { data, error } = await supabase
    .from('visitor_logs')
    .insert([{
      ...visitorData,
      status: VISITOR_STATUS.ACTIVE,
      entry_time: new Date()
    }])
    .select();

  if (error) throw error;
  return data;
};

export const getVisitors = async (filters = {}) => {
  let query = supabase
    .from('visitor_logs')
    .select('*')
    .order('entry_time', { ascending: false });

  if (filters.residentId) {
    query = query.eq('resident_id', filters.residentId);
  }

  if (filters.status) {
    query = query.eq('status', filters.status);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};
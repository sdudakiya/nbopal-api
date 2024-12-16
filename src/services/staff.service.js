import { supabase } from '../config/supabase.js';

export const createCheckIn = async (staffId) => {
  // Check if there's already an active check-in
  const { data: existingCheckIn } = await supabase
    .from('staff_attendance')
    .select('*')
    .eq('staff_id', staffId)
    .is('check_out', null)
    .single();

  if (existingCheckIn) {
    throw new Error('Staff member already checked in');
  }

  const { data, error } = await supabase
    .from('staff_attendance')
    .insert([{
      staff_id: staffId,
      check_in: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const createCheckOut = async (attendanceId) => {
  const { data: attendance } = await supabase
    .from('staff_attendance')
    .select('*')
    .eq('id', attendanceId)
    .single();

  if (!attendance) {
    throw new Error('Attendance record not found');
  }

  if (attendance.check_out) {
    throw new Error('Staff member already checked out');
  }

  const { data, error } = await supabase
    .from('staff_attendance')
    .update({
      check_out: new Date().toISOString()
    })
    .eq('id', attendanceId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getAttendanceLogs = async ({ startDate, endDate, staffId }) => {
  let query = supabase
    .from('staff_attendance')
    .select(`
      *,
      staff:staff_id (
        id,
        name,
        role
      )
    `)
    .order('check_in', { ascending: false });

  if (staffId) {
    query = query.eq('staff_id', staffId);
  }

  if (startDate) {
    query = query.gte('check_in', startDate);
  }

  if (endDate) {
    query = query.lte('check_in', endDate);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};
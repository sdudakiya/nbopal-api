// Database queries for notifications
export const notificationQueries = {
  getAll: (userId) => ({
    from: 'notifications',
    select: '*',
    match: { user_id: userId },
    order: { created_at: 'desc' }
  }),
  
  create: (data) => ({
    from: 'notifications',
    insert: [data],
    select: '*'
  }),
  
  markAsRead: (notificationId, userId) => ({
    from: 'notifications',
    update: { read: true },
    match: { 
      id: notificationId,
      user_id: userId 
    }
  })
};
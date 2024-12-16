import { successResponse } from '../../utils/response.js';
import { getHealthStatus } from '../../services/health/index.js';

export const healthController = {
  checkHealth: async (req, res) => {
    const status = await getHealthStatus();
    return successResponse(res, status);
  }
};
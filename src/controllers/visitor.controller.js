import { createVisitor, getVisitors } from '../services/visitor.service.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const createVisitorEntry = async (req, res) => {
  try {
    const { name, purpose, phoneNumber, expectedDuration } = req.body;
    const visitorData = {
      name,
      purpose,
      phone_number: phoneNumber,
      expected_duration: expectedDuration,
      resident_id: req.user.id
    };

    const visitor = await createVisitor(visitorData);
    return successResponse(res, visitor, 'Visitor entry created successfully', 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const getVisitorLogs = async (req, res) => {
  try {
    const { status, residentId } = req.query;
    const filters = { status, residentId };
    
    const visitors = await getVisitors(filters);
    return successResponse(res, visitors);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
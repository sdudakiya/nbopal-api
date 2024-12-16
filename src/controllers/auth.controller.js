import { hashPassword, generateToken, findUserByEmail, comparePasswords } from '../services/auth.service.js';
import { successResponse, errorResponse } from '../utils/response.js';
import { ERROR_MESSAGES } from '../utils/constants.js';

export const register = async (req, res) => {
  try {
    const { email, password, name, role = 'resident' } = req.body;
    const hashedPassword = await hashPassword(password);

    const { data, error } = await supabase
      .from('users')
      .insert([{ email, password: hashedPassword, name, role }])
      .select()
      .single();

    if (error) throw error;

    const token = generateToken(data.id);
    return successResponse(res, { token }, 'User registered successfully', 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) {
      return errorResponse(res, ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
    }

    const isValidPassword = await comparePasswords(password, user.password);
    if (!isValidPassword) {
      return errorResponse(res, ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
    }

    const token = generateToken(user.id);
    return successResponse(res, { token }, 'Login successful');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
import { userService } from './userService.js';
import { errors } from '../constants/errors.js';

class AuthService {
  login(userData) {
    const user = userService.search(userData);
    if (!user) {
      throw Error(errors.userNotFound);
    }
    return user;
  }
}

export const authService = new AuthService();
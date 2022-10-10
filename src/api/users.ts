import { Rest } from '../helpers';
import { User } from '../interfaces';

/// Users APIs
export class Users {
  /// Get user roles by [userId]
  async getUserRoles(userId: number) {
    const result = await Rest.Get({ url: `/API/Users/GetUserRoles/${userId}` });
    return result;
  }

  /// Get user by [id]
  async get(id: number) {
    const result = await Rest.Get({ url: `/API/Users/GetUser/${id}` });
    return result;
  }

  /// Get all users
  async getAll() {
    const result = await Rest.Get({ url: '/API/Users/GetUsers' });
    return result;
  }

  /// Add a new user
  async add(user: User) {
    const result = await Rest.Post({ url: `/API/Users/AddUser`, data: user });
    return result;
  }

  /// Update user by [id]
  async update(id: number, user: User) {
    const result = await Rest.Put({ url: `/API/Users/UpdateUser?Id=${id}`, data: user });
    return result;
  }

  /// Delete user by [id]
  async delete(id: number) {
    const result = await Rest.Delete({ url: `/API/Users/DeleteUser?Id=${id}` });
    return result;
  }
}

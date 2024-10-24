import { Rest } from '../helpers';
import { User } from '../interfaces';
import { version, apiraiser } from '../constants';

/// Users APIs
export class Users {
  /// Get user roles by [userId]
  async getUserRoles(userId: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/Users/GetUserRoles/${userId}` });
    return result;
  }

  /// Get user by [id]
  async get(id: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/Users/GetUser/${id}` });
    return result;
  }
  /// Get user by role name
  async getUserByRole(role: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/Users/GetUserByRole/${role}` });
    return result;
  }

  /// Get all users
  async getAll() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/Users/GetUsers` });
    return result;
  }

  /// Check if username is available
  async isUsernameAvailable(username: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/Users/IsUsernameAvailable/${username}` });
    return result;
  }

  /// Check if email is available
  async isEmailAvailable(email: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/Users/IsEmailAvailable/${email}` });
    return result;
  }

  /// Add a new user
  async add(user: User) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/Users/AddUser`, data: user });
    return result;
  }

  /// Update user by [id]
  async update(id: string, user: User) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/Users/UpdateUser?Id=${id}`, data: user });
    return result;
  }

  /// Delete user by [id]
  async delete(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/Users/DeleteUser?Id=${id}` });
    return result;
  }
}

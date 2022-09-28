import axios from 'axios';
import { Headers, State } from '../helpers';
import { User } from '../models';

/// Users APIs
export class Users {
  /// Get user roles by [userId]
  async getUserRoles(userId: number) {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/Users/GetUserRoles/${userId}`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Get user by [id]
  async get(id: number) {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/Users/GetUser/${id}`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Get all users
  async getAll() {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/Users/GetUsers`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Add a new user
  async add(user: User) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/Users/AddUser`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(user.toJsonObject),
    });
    return result;
  }

  /// Update user by [id]
  async update(id: number, user: User) {
    const result = await axios({
      method: 'put',
      url: `${State.endPoint}/API/Users/UpdateUser?Id=${id}`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(user.toJsonObject),
    });
    return result;
  }

  /// Delete user by [id]
  async delete(id: number) {
    const result = await axios({
      method: 'delete',
      url: `${State.endPoint}/API/Users/DeleteUser?Id=${id}`,
      headers: Headers.getHeaders(),
    });
    return result;
  }
}

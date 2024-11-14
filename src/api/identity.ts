import { Rest } from '../helpers';
import { IdentityUser } from '../interfaces';
import { version, apiraiser, app } from '../constants';

/// Identity APIs
export class Identity {
  /// Get Roles
  async getRoles(pageSize = -1, page = -1) {
    const url = `/${apiraiser}/${version}/${app}/Identity/Roles?pageSize=${pageSize}&page=${page}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Users
  async getUsers(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/Identity/Users?pageSize=${pageSize}&page=${page}`;

    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }

    const result = await Rest.Get({ url });
    return result;
  }

  /// Get User by id
  async getUserById(id: string) {
    const url = `/${apiraiser}/${version}/${app}/Identity/User/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Create user
  async createUser(user: IdentityUser) {
    const url = `/${apiraiser}/${version}/${app}/Identity/User`;
    const result = await Rest.Post({ url, data: user });
    return result;
  }

  /// Update user
  async updateuser(user: IdentityUser) {
    const url = `/${apiraiser}/${version}/${app}/Identity/User`;
    const result = await Rest.Put({ url, data: user });
    return result;
  }

  /// Delete user
  async deleteUser(id: string) {
    const url = `/${apiraiser}/${version}/${app}/Identity/User/${id}`;
    const result = await Rest.Delete({ url });
    return result;
  }

  /// Insert a role
  async insertRole(data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/Identity/Role`, data });
    return result;
  }

  /// Update a role
  async updateRole(id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/${app}/Identity/Role/${id}`, data });
    return result;
  }

  /// Delete a role
  async deleteRole(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/Identity/Role/${id}` });
    return result;
  }

  /// Change password
  async changePassword(id: string, password: string) {
    const url = `/${apiraiser}/${version}/${app}/Identity/ChangePassword`;
    const result = await Rest.Post({ url, data: { Password: password, Id: id } });
    return result;
  }

  /// Send Verification Email
  async sendVerificationEmail(id: string) {
    const url = `/${apiraiser}/${version}/${app}/Identity/SendVerificationEmail/${id}`;
    const result = await Rest.Post({ url });
    return result;
  }

  /// Check if username is available
  async isUsernameAvailable(username: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${app}/Identity/IsUsernameAvailable/${username}` });
    return result;
  }

  /// Check if email is available
  async isEmailAvailable(email: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${app}/Identity/IsEmailAvailable/${email}` });
    return result;
  }

  /// Get user by role name
  async getUserByRole(role: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${app}/Identity/GetUserByRole/${role}` });
    return result;
  }
}

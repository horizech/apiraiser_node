import { Rest } from '../helpers';
import { IdentityUser } from '../interfaces';
import { version } from '../version';

/// Identity APIs
export class Identity {
  /// Get Roles
  async getRoles() {
    const url = `/API/${version}/Identity/GetRoles`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Users
  async getUsers(limit = -1, offset = -1) {
    const url = `/API/${version}/Identity/GetUsers?limit=${limit}&offset=${offset}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get User by id
  async getUserById(id: string) {
    const url = `/API/${version}/Identity/GetUser/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Create user
  async createUser(user: IdentityUser) {
    const url = `/API/${version}/Identity/CreateUser`;
    const result = await Rest.Post({ url, data: user });
    return result;
  }

  /// Update user
  async updateuser(user: IdentityUser) {
    const url = `/API/${version}/Identity/UpdateUser`;
    const result = await Rest.Put({ url, data: user });
    return result;
  }

  /// Delete user
  async deleteUser(id: string) {
    const url = `/API/${version}/Identity/DeleteUser/${id}`;
    const result = await Rest.Delete({ url });
    return result;
  }

  /// Change password
  async changePassword(id: string, password: string) {
    const url = `/API/${version}/Identity/ChangePassword`;
    const result = await Rest.Post({ url, data: { Password: password, Id: id } });
    return result;
  }

  /// Send Verification Email
  async sendVerificationEmail(id: string) {
    const url = `/API/${version}/Identity/SendVerificationEmail/${id}`;
    const result = await Rest.Post({ url });
    return result;
  }
}

import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';
import { ProjSafeDepartment, ProjSafeUserDepartment } from '../index';

/// Proj Safe Departments App APIs
export class ProjSafeDepartmentsApp {
  /// Get Departments
  async getDepartments(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/ProjSafeDepartments?pageSize=${pageSize}&page=${page}`;
    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Department by id
  async getDepartmentById(id: string) {
    const url = `/${apiraiser}/${version}/${app}/ProjSafeDepartments/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert Department
  async insertDepartment(data: ProjSafeDepartment) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/ProjSafeDepartments`, data });
    return result;
  }

  /// Update Department
  async updateDepartment(id: string, data: ProjSafeDepartment) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/ProjSafeDepartments/${id}`,
      data,
    });
    return result;
  }

  /// Delete Department
  async deleteDepartment(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/ProjSafeDepartments/${id}` });
    return result;
  }

  /// Get User Department
  async getUserDepartment(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/ProjSafeDepartments/UserDepartment?pageSize=${pageSize}&page=${page}`;
    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get User Department by id
  async getUserDepartmentById(id: string) {
    const url = `/${apiraiser}/${version}/${app}/ProjSafeDepartments/UserDepartment/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert User Department
  async insertUserDepartment(data: ProjSafeUserDepartment) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/ProjSafeDepartments/UserDepartment`, data });
    return result;
  }

  /// Update User Department
  async updateUserDepartment(id: string, data: ProjSafeUserDepartment) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/ProjSafeDepartments/UserDepartment/${id}`,
      data,
    });
    return result;
  }

  /// Delete User Department
  async deleteUserDepartment(id: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/ProjSafeDepartments/UserDepartment/${id}`,
    });
    return result;
  }

  /// Get Users
  async getAvailableUsers(id: string) {
    let url = `/${apiraiser}/${version}/${app}/ProjSafeDepartments/AvailableUsers`;
    if (id) url += `?id=${id}`;
    const result = await Rest.Get({ url });
    return result;
  }
}

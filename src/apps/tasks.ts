import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Tasks App APIs
export class TasksApp {
  /// Insert a new record
  async insert(data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/Tasks`, data });
    return result;
  }

  /// Update record
  async update(id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/${app}/Tasks/${id}`, data });
    return result;
  }

  /// Delete record
  async delete(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/Tasks/${id}` });
    return result;
  }

  /// Get records
  /// Get records
  async get(pageSize?: number, page?: number) {
    const baseUrl = `/${apiraiser}/${version}/${app}/Tasks`;
    const queryParams: URLSearchParams = new URLSearchParams();
    if (pageSize != null && pageSize > 0) queryParams.append('pageSize', pageSize.toString());
    if (page != null) queryParams.append('page', page.toString());
    const url = queryParams.toString() ? `${baseUrl}?${queryParams.toString()}` : baseUrl;
    const result = await Rest.Get({
      url,
    });
    return result;
  }
}

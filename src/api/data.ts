import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version } from '../version';

/// Data APIs
export class Data {
  /// Get table rows
  async get(table: string, limit?: number) {
    const result = await Rest.Get({
      url: `/API/${version}/data/${table}${(limit ?? 0) > 0 ? `?limit=${limit}` : ''}`,
    });
    return result;
  }

  /// Insert a new row
  async insert(table: string, data: object) {
    const result = await Rest.Post({ url: `/API/${version}/data/${table}`, data });
    return result;
  }

  /// Get row
  async getById(table: string, id: string) {
    const result = await Rest.Get({ url: `/API/${version}/data/${table}/${id}` });
    return result;
  }

  /// Update row
  async update(table: string, id: string, data: object) {
    const result = await Rest.Put({ url: `/API/${version}/data/${table}/${id}`, data });
    return result;
  }

  /// Delete row
  async delete(table: string, id: string) {
    const result = await Rest.Delete({ url: `/API/${version}/data/${table}/${id}` });
    return result;
  }

  /// Get row by conditions
  async getByConditions(table: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/API/${version}/data/${table}/GetRowsByConditions`,
      data: conditions,
    });
    return result;
  }

  /// Insert a list of rows
  async insertList(table: string, data: object[]) {
    const result = await Rest.Post({ url: `/API/${version}/data/${table}/InsertRows`, data });
    return result;
  }

  /// Delete rows by conditions
  async deleteByConditions(table: string, conditions: QuerySearchItem[]) {
    const result = await Rest.Delete({
      url: `/API/${version}/data/${table}/DeleteRows`,
      data: conditions,
    });
    return result;
  }
}

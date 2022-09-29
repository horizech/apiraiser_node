import axios from 'axios';
import { Headers, State, JsonHelper, Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';

/// Data APIs
export class Data {
  /// Get table rows
  async get(table: string, limit?: number) {
    const result = await Rest.Get({ url: `/API/table/${table}${(limit ?? 0) > 0 ? `?limit=${limit}` : ''}` });
    return result;
  }

  /// Insert a new row
  async insert(table: string, data: object) {
    const result = await Rest.Post({ url: `/API/table/${table}`, data });
    return result;
  }

  /// Get row
  async getById(table: string, id: number) {
    const result = await Rest.Get({ url: `/API/table/${table}/${id}` });
    return result;
  }

  /// Update row
  async update(table: string, id: number, data: object) {
    const result = await Rest.Put({ url: `/API/table/${table}/${id}`, data });
    return result;
  }

  /// Delete row
  async delete(table: string, id: number) {
    const result = await Rest.Delete({ url: `/API/table/${table}/${id}` });
    return result;
  }

  /// Get row by conditions
  async getByConditions(table: string, conditions: QuerySearchItem[]) {
    const result = await Rest.Post({
      url: `/API/table/${table}/GetRowsByConditions`,
      data: conditions.map((e) => JsonHelper.toJsonObject<QuerySearchItem>(e)),
    });
    return result;
  }

  /// Insert a list of rows
  async insertList(table: string, data: object[]) {
    const result = await Rest.Post({ url: `/API/table/${table}/InsertRows`, data });
    return result;
  }

  /// Delete rows by conditions
  async deleteByConditions(table: string, conditions: QuerySearchItem[]) {
    const result = await Rest.Delete({
      url: `/API/table/${table}/DeleteRows`,
      data: conditions.map((e) => JsonHelper.toJsonObject<QuerySearchItem>(e)),
    });
    return result;
  }
}

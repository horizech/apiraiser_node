import axios from 'axios';
import { Headers, State, toJsonObject } from '../helpers';
import { QuerySearchItem } from '../interfaces';

/// Data APIs
export class Data {
  /// Get table rows
  async get(table: string, limit: number) {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/table/${table}${limit > 0 ? `?limit=${limit}` : ''}`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Insert a new row
  async insert(table: string, data: object) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/table/${table}`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(data),
    });
    return result;
  }

  /// Get row
  async getById(table: string, id: number) {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/table/${table}/${id}`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Update row
  async update(table: string, id: number, data: object) {
    const result = await axios({
      method: 'put',
      url: `${State.endPoint}/API/table/${table}/${id}`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(data),
    });
    return result;
  }

  /// Delete row
  async delete(table: string, id: number) {
    const result = await axios({
      method: 'delete',
      url: `${State.endPoint}/API/table/${table}/${id}`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Get row by conditions
  async getByConditions(table: string, conditions: QuerySearchItem[]) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/table/${table}/GetRowsByConditions`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(conditions.map((e) => toJsonObject<QuerySearchItem>(e))),
    });
    return result;
  }

  /// Insert a list of rows
  async insertList(table: string, data: object[]) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/table/${table}/InsertRows`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(data),
    });
    return result;
  }

  /// Delete rows by conditions
  async deleteByConditions(table: string, conditions: QuerySearchItem[]) {
    const result = await axios({
      method: 'delete',
      url: `${State.endPoint}/API/table/${table}/DeleteRows`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(conditions.map((e) => toJsonObject<QuerySearchItem>(e))),
    });
    return result;
  }
}

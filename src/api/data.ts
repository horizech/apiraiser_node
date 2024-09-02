import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version } from '../version';

/// Data APIs
export class Data {
  /// Get table rows
  async get(
    table: string,
    limit?: number,
    {
      offset,
      orderBy,
      orderDescendingBy,
      groupBy,
    }: {
      offset?: number;
      orderBy?: string;
      orderDescendingBy?: string;
      groupBy?: string;
    } = {},
  ) {
    const baseUrl = `/API/${version}/data/${table}`;

    const queryParams: URLSearchParams = new URLSearchParams();
    if (orderBy) queryParams.append('orderBy', orderBy);
    if (orderDescendingBy) queryParams.append('orderDescendingBy', orderDescendingBy);
    if (groupBy) queryParams.append('groupBy', groupBy);
    if (limit !== undefined && limit > 0) queryParams.append('limit', limit.toString());
    if (offset !== undefined) queryParams.append('offset', offset.toString());

    const url = `${baseUrl}?${queryParams.toString()}`;

    const result = await Rest.Get({
      url: url,
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
  /// Get count
  async getCount(table: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/API/${version}/data/${table}/GetCount`,
      data: conditions,
    });
    return result;
  }

  /// Insert a list of rows
  async insertList(table: string, data: object[]) {
    const result = await Rest.Post({ url: `/API/${version}/data/${table}/InsertRows`, data });
    return result;
  }

  /// Update rows by conditions
  async updateByConditions(table: string, data: object[], conditions: QuerySearchItem[] = []) {
    const result = await Rest.Put({
      url: `/API/${version}/data/${table}/UpdateRows`,
      data: {
        Data: data,
        Parameters: conditions,
      },
    });
    return result;
  }
  /// Delete rows by conditions
  async deleteByConditions(table: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Delete({
      url: `/API/${version}/data/${table}/DeleteRows`,
      data: conditions,
    });
    return result;
  }

  /// Delete rows by ids
  async deleteByIds(table: string, ids: string[]) {
    const result = await Rest.Delete({
      url: `/API/${version}/data/${table}/DeleteRowsByIds`,
      data: ids,
    });
    return result;
  }
}

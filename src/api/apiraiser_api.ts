import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version, apiraiser } from '../constants';

/// API APIs
export class API {
  /// Insert a new record
  async insert(collection: string, data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/API/${collection}`, data });
    return result;
  }

  /// Get record by id
  async getById(collection: string, id: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/API/${collection}/${id}` });
    return result;
  }

  /// Update record by id
  async update(collection: string, id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/API/${collection}/${id}`, data });
    return result;
  }

  /// Delete record by id
  async delete(collection: string, id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/API/${collection}/${id}` });
    return result;
  }

  /// Get records by conditions
  async getRecordsByConditions(
    collection: string,
    {
      limit,
      offset,
      orderBy,
      orderDescendingBy,
      groupBy,
      conditions,
    }: {
      limit?: number;
      offset?: number;
      orderBy?: string;
      orderDescendingBy?: string;
      groupBy?: string;
      conditions?: QuerySearchItem[];
    } = {},
  ) {
    const baseUrl = `/${apiraiser}/${version}/API/GetRecordsByConditions/${collection}`;

    const queryParams: URLSearchParams = new URLSearchParams();
    if (orderBy) queryParams.append('orderBy', orderBy);
    if (orderDescendingBy) queryParams.append('orderDescendingBy', orderDescendingBy);
    if (groupBy) queryParams.append('groupBy', groupBy);
    if (limit !== undefined && limit > 0) queryParams.append('limit', limit.toString());
    if (offset !== undefined) queryParams.append('offset', offset.toString());

    const url = `${baseUrl}?${queryParams.toString()}`;

    const result = await Rest.Post({
      url: url,
      data: conditions || [],
    });

    return result;
  }

  // Get records
  async get(
    collection: string,
    {
      limit,
      offset,
      orderBy,
      orderDescendingBy,
      groupBy,
    }: {
      limit?: number;
      offset?: number;
      orderBy?: string;
      orderDescendingBy?: string;
      groupBy?: string;
    } = {},
  ) {
    const baseUrl = `/${apiraiser}/${version}/API/${collection}`;
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
}

import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version, apiraiser, plugin } from '../constants';

/// Rest API Plugin APIs
export class RestAPIPlugin {
  /// Insert a new record
  async insert(collection: string, data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${plugin}/RestAPI/${collection}`, data });
    return result;
  }

  /// Get record by id
  async getById(collection: string, id: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${plugin}/RestAPI/${collection}/${id}` });
    return result;
  }

  /// Update record by id
  async update(collection: string, id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/${plugin}/RestAPI/${collection}/${id}`, data });
    return result;
  }

  /// Delete record by id
  async delete(collection: string, id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${plugin}/RestAPI/${collection}/${id}` });
    return result;
  }

  /// Get records by conditions
  async getRecordsByConditions(
    collection: string,
    {
      pageSize,
      page,
      orderBy,
      orderDescendingBy,
      groupBy,
      conditions,
    }: {
      pageSize?: number;
      page?: number;
      orderBy?: string;
      orderDescendingBy?: string;
      groupBy?: string;
      conditions?: QuerySearchItem[];
    } = {},
  ) {
    const baseUrl = `/${apiraiser}/${version}/${plugin}/RestAPI/GetRecordsByConditions/${collection}`;
    const queryParams: URLSearchParams = new URLSearchParams();
    if (orderBy) queryParams.append('orderBy', orderBy);
    if (orderDescendingBy) queryParams.append('orderDescendingBy', orderDescendingBy);
    if (groupBy) queryParams.append('groupBy', groupBy);
    if (pageSize !== undefined && pageSize > 0) queryParams.append('pageSize', pageSize.toString());
    if (page !== undefined) queryParams.append('page', page.toString());

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
    const baseUrl = `/${apiraiser}/${version}/${plugin}/RestAPI/${collection}`;
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

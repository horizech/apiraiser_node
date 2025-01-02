import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';
import { QuerySearchItem } from '../interfaces';

/// Content Studio App APIs
export class ContentStudioApp {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/${app}/ContentStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  // Get Foreign Collections
  async getForeignCollections() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/ForeignCollections`,
    });
    return result;
  }
  // Get Records
  async getRecords(collectionName: string, pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/ContentStudio/${collectionName}?pageSize=${pageSize}&page=${page}`;
    if (filtertext) url += `&filtertext=${encodeURIComponent(filtertext)}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert a new record
  async insertRecord(collection: string, data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/ContentStudio/${collection}`, data });
    return result;
  }

  // /// Get record by id
  // async getRecordById(collection: string, id: string) {
  //   const result = await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Database/Record/${collection}/${id}` });
  //   return result;
  // }

  /// Update record by id
  async updateRecord(collection: string, id: string, data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/${collection}/${id}`,
      data,
    });
    return result;
  }

  // Delete Record
  async deleteRecord(collection: string, id: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/${collection}/${id}`,
    });
    return result;
  }

  /// Get all collections
  async getCollectionList() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/CollectionsList`,
    });
    return result;
  }

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
    const baseUrl = `/${apiraiser}/${version}/${app}/ContentStudio/GetRecordsByConditions/${collection}`;

    const queryParams: URLSearchParams = new URLSearchParams();
    if (orderBy) queryParams.append('orderBy', orderBy);
    if (orderDescendingBy) queryParams.append('orderDescendingBy', orderDescendingBy);
    if (groupBy) queryParams.append('groupBy', groupBy);
    if (pageSize !== undefined && pageSize > 0) queryParams.append('pageSize', pageSize.toString());
    if (page !== undefined) queryParams.append('page', page.toString());

    const url = `${baseUrl}?${queryParams.toString()}`;

    const result = await Rest.Post({
      url,
      data: conditions || [],
    });

    return result;
  }

  /// Get Collection Attributes
  async getCollectionAttributes(collection: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${app}/ContentStudio/Attribute/${collection}` });
    return result;
  }

  /// Get record by id
  async getRecordById(collection: string, id: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${app}/ContentStudio/${collection}/${id}` });
    return result;
  }

  // Get Records Count
  async getRecordsCount(collection: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/${collection}/Count`,
      data: conditions,
    });
    return result;
  }

  /// Update records by conditions
  async updateRecordsByConditions(collection: string, data: object[], conditions: QuerySearchItem[] = []) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/UpdateRecordsByConditions/${collection}`,
      data: {
        Data: data,
        Parameters: conditions,
      },
    });
    return result;
  }
  /// Delete records by conditions
  async deleteRecordsByConditions(collection: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/DeleteRecordsByConditions/${collection}`,
      data: conditions,
    });
    return result;
  }
}

import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Records App APIs
export class RecordsApp {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/${app}/Records/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }
  async getDataByCollection(collectionName: string, pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/Records/${collectionName}?pageSize=${pageSize}&page=${page}`;
    if (filtertext) url += `&filtertext=${encodeURIComponent(filtertext)}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert a new record
  async insert(collection: string, data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/Records/${collection}`, data });
    return result;
  }

  /// Get record by id
  async getRecordById(collection: string, id: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${app}/Records/${collection}/${id}` });
    return result;
  }

  /// Update record by id
  async update(collection: string, id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/${app}/Records/${collection}/${id}`, data });
    return result;
  }

  /// Delete record by id
  async delete(collection: string, id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/Records/${collection}/${id}` });
    return result;
  }
  /// Delete records by ids
  async deleteByIds(collection: string, ids: string[]) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/Records/${collection}/DeleteRecordsByIds`,
      data: ids,
    });
    return result;
  }
}

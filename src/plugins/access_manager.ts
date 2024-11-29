import { Rest } from '../helpers';
import { version, apiraiser, plugin } from '../constants';

/// Access Manager  APIs
export class AccessManagerPlugin {
  /// Get Data
  async getData(collectionName?: string) {
    const url = `/${apiraiser}/${version}/${plugin}/AccessManager/GetData${
      collectionName ? `?collectionName=${collectionName}` : ''
    }`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert a new record
  async insert(collection: string, data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${plugin}/AccessManager/${collection}`, data });
    return result;
  }

  /// Update record by id
  async update(collection: string, id: string, data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${plugin}/AccessManager/${collection}/${id}`,
      data,
    });
    return result;
  }

  /// Delete record by id
  async delete(collection: string, id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${plugin}/AccessManager/${collection}/${id}` });
    return result;
  }
}

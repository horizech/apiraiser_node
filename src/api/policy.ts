import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Policy Editor  APIs
export class PolicyEditor {
  /// Get Data
  async getData(collectionName?: string) {
    const url = `/${apiraiser}/${version}/${app}/PolicyEditor/GetData${
      collectionName ? `?collectionName=${collectionName}` : ''
    }`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert a new record
  async insert(collection: string, data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/PolicyEditor/${collection}`, data });
    return result;
  }

  /// Update record by id
  async update(collection: string, id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/${app}/PolicyEditor/${collection}/${id}`, data });
    return result;
  }

  /// Delete record by id
  async delete(collection: string, id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/PolicyEditor/${collection}/${id}` });
    return result;
  }
}

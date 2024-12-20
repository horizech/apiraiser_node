import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

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
      url: `/${apiraiser}/${version}/${app}/ContentStudio/GetForeignCollections`,
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
  // Delete Record
  async deleteRecord(collection: string, id: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/ContentStudio/${collection}/${id}`,
    });
    return result;
  }
}

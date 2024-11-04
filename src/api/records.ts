import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Records APIs
export class Records {
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
}

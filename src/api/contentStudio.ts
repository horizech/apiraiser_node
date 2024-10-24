import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Content Studio APIs
export class ContentStudio {
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
}

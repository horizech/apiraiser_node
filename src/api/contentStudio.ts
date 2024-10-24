import { Rest } from '../helpers';
import { version, apiraiser } from '../constants';

/// Content Studio APIs
export class ContentStudio {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/ContentStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  // Get Foreign Collections
  async getForeignCollections() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/ContentStudio/GetForeignCollections`,
    });
    return result;
  }
}

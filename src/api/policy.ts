import { Rest } from '../helpers';
import { version, apiraiser } from '../constants';

/// Policy APIs
export class Policy {
  /// Get Data
  async getData(collectionName?: string) {
    const url = `/${apiraiser}/${version}/Policy/GetData${collectionName ? `?collectionName=${collectionName}` : ''}`;
    const result = await Rest.Get({ url });
    return result;
  }
}

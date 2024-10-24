import { Rest } from '../helpers';
import { version } from '../constants';

/// Policy APIs
export class Policy {
  /// Get Data
  async getData(collectionName?: string) {
    const url = `/API/${version}/Policy/GetData${collectionName ? `?collectionName=${collectionName}` : ''}`;
    const result = await Rest.Get({ url });
    return result;
  }
}

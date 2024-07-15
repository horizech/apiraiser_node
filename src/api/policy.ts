import { Rest } from '../helpers';
import { version } from '../version';

/// Policy APIs
export class Policy {
  /// Get Data
  async getData(tablename?: string) {
    const url = `/API/${version}/Policy/GetData${tablename ? `?tablename=${tablename}` : ''}`;
    const result = await Rest.Get({ url });
    return result;
  }
}

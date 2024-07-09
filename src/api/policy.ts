import { Rest } from '../helpers';
import { version } from '../version';

/// Policy APIs
export class Policy {
  /// Get Data
  async getData() {
    const result = await Rest.Get({ url: `/API/${version}/Policy/GetData` });
    return result;
  }
}

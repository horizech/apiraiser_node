import { Rest } from '../helpers';
import { version } from '../constants';

/// Records APIs
export class Records {
  /// Get Data
  async getData() {
    const url = `/API/${version}/Records/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }
}

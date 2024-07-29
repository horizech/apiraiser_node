import { Rest } from '../helpers';
import { version } from '../version';

/// Design APIs
export class Design {
  /// Get Data
  async getData() {
    const url = `/API/${version}/Design/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }
}

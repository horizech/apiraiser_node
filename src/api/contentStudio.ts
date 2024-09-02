import { Rest } from '../helpers';
import { version } from '../version';

/// Content Studio APIs
export class ContentStudio {
  /// Get Data
  async getData() {
    const url = `/API/${version}/ContentStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }
}

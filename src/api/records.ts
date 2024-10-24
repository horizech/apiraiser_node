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
}

import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Policy Editor  APIs
export class PolicyEditor {
  /// Get Data
  async getData(collectionName?: string) {
    const url = `/${apiraiser}/${version}/${app}/PolicyEditor/GetData${
      collectionName ? `?collectionName=${collectionName}` : ''
    }`;
    const result = await Rest.Get({ url });
    return result;
  }
}

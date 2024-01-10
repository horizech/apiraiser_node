import { Rest } from '../helpers';
import { version } from '../version';

/// AWSS3 APIs
export class AWSS3 {
  /// Delete By key
  async DeleteByKey(key: string) {
    const result = await Rest.Get({
      url: `/API/${version}/AWSS3/DeleteByKey?key=${key}`,
    });
    return result;
  }
}

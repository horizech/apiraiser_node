import { Rest } from '../helpers';

/// AWSS3 APIs
export class AWSS3 {
  /// Delete By key
  async DeleteByKey(key: string) {
    const result = await Rest.Get({
      url: `/API/v1/AWSS3/DeleteByKey?key=${key}`,
    });
    return result;
  }
}

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
  /// Upload folder
  async UploadFolder(key: string, folder: string) {
    const result = await Rest.Post({
      url: `/API/${version}/AWSS3/UploadFolder?key=${key}`,
      data: folder,
    });
    return result;
  }
}

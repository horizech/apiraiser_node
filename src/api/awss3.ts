import { Rest } from '../helpers';
import { version, apiraiser, plugin } from '../constants';

/// AWSS3 APIs
export class AWSS3 {
  /// Delete By key
  async DeleteByKey(key: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/AWSS3/DeleteByKey?key=${key}`,
    });
    return result;
  }
  /// Upload folder
  async UploadFolder(key: string, folder: string, deleteSourceFolderAfterUpload: boolean) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/AWSS3/UploadFolder?key=${key}&deleteSourceFolderAfterUpload=${deleteSourceFolderAfterUpload}`,
      data: folder,
    });
    return result;
  }
}

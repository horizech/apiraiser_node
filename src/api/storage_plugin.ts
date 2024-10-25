import { Rest } from '../helpers';
import { StorageUploadRequest } from '../interfaces';
import { version, apiraiser, plugin } from '../constants';

/// Storage Plugin APIs
export class StoragePlugin {
  /// Upload Storage
  async upload(storageUploadRequest: StorageUploadRequest) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/${plugin}/Storage`,
        data: storageUploadRequest,
      },
      null,
      {
        'Content-Type': 'multipart/form-data',
      },
    );
    return result;
  }
  /// Update Storage
  async update(storageId: string, storageUploadRequest: StorageUploadRequest) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${plugin}/Storage/${storageId}`,
      data: storageUploadRequest,
    });
    return result;
  }
  /// Delete Storage
  async delete(storageId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${plugin}/Storage/${storageId}`,
    });
    return result;
  }
  /// Download Storage
  async download(storageId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/Storage/Download/${storageId}`,
      responseType: 'blob',
    });
    return result;
  }
}

import { Rest } from '../helpers';
import { StorageUploadRequest } from '../interfaces';

/// Storage APIs
export class Storage {
  /// Upload Storage
  async upload(StorageUploadRequest: StorageUploadRequest) {
    const result = await Rest.Post({
      url: '/API/Storage',
      data: StorageUploadRequest,
    });
    return result;
  }
  /// Update Storage
  async update(storageId: string, StorageUploadRequest: StorageUploadRequest) {
    const result = await Rest.Put({
      url: `/API/Storage/${storageId}`,
      data: StorageUploadRequest,
    });
    return result;
  }
  /// Delete Storage
  async delete(storageId: string) {
    const result = await Rest.Delete({
      url: `/API/Storage/${storageId}`,
    });
    return result;
  }
  /// Download Storage
  async download(storageId: string) {
    const result = await Rest.Get({
      url: `/API/Storage/Download/${storageId}`,
      responseType: 'blob',
    });
    return result;
  }
}

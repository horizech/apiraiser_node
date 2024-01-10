import { Rest } from '../helpers';
import { StorageUploadRequest } from '../interfaces';
import { version } from '../version';

/// Storage APIs
export class Storage {
  /// Upload Storage
  async upload(storageUploadRequest: StorageUploadRequest) {
    const result = await Rest.Post({
      url: `/API/${version}/Storage`,
      data: storageUploadRequest,
    });
    return result;
  }
  /// Update Storage
  async update(storageId: string, storageUploadRequest: StorageUploadRequest) {
    const result = await Rest.Put({
      url: `/API/${version}/Storage/${storageId}`,
      data: storageUploadRequest,
    });
    return result;
  }
  /// Delete Storage
  async delete(storageId: string) {
    const result = await Rest.Delete({
      url: `/API/${version}/Storage/${storageId}`,
    });
    return result;
  }
  /// Download Storage
  async download(storageId: string) {
    const result = await Rest.Get({
      url: `/API/${version}/Storage/Download/${storageId}`,
      responseType: 'blob',
    });
    return result;
  }
}

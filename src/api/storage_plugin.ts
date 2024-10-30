import { Rest } from '../helpers';
import { StorageUploadRequest } from '../interfaces';
import { version, apiraiser, provider } from '../constants';

/// Storage Provider APIs
export class StorageProvider {
  /// Upload Storage
  async upload(storageUploadRequest: StorageUploadRequest) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/${provider}/Storage`,
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
      url: `/${apiraiser}/${version}/${provider}/Storage/${storageId}`,
      data: storageUploadRequest,
    });
    return result;
  }
  /// Delete Storage
  async delete(storageId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${provider}/Storage/${storageId}`,
    });
    return result;
  }
  /// Download Storage
  async download(storageId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Storage/Download/${storageId}`,
      responseType: 'blob',
    });
    return result;
  }
}

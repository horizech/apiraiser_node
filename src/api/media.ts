import { Rest } from '../helpers';
import { MediaUploadRequest } from '../interfaces';

/// Media APIs
export class Media {
  /// Upload media
  async upload(mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Post({
      url: '/API/v1/Media',
      data: mediaUploadRequest,
    });
    return result;
  }
  /// Update media
  async update(mediaId: string, mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Put({
      url: `/API/v1/Media/${mediaId}`,
      data: mediaUploadRequest,
    });
    return result;
  }
  /// Delete media
  async delete(mediaId: string) {
    const result = await Rest.Delete({
      url: `/API/v1/Media/${mediaId}`,
    });
    return result;
  }
  /// Download media
  async download(mediaId: string) {
    const result = await Rest.Get({
      url: `/API/v1/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }
}

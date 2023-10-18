import { Rest } from '../helpers';
import { MediaUploadRequest } from '../interfaces';

/// Media APIs
export class Media {
  /// Upload media
  async upload(mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Post({
      url: '/API/Media',
      data: mediaUploadRequest,
    });
    return result;
  }
  /// Update media
  async update(mediaId: string, mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Put({
      url: `/API/Media/${mediaId}`,
      data: mediaUploadRequest,
    });
    return result;
  }
  /// Delete media
  async delete(mediaId: string) {
    const result = await Rest.Delete({
      url: `/API/Media/${mediaId}`,
    });
    return result;
  }
  /// Download media
  async download(mediaId: string) {
    const result = await Rest.Get({
      url: `/API/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }
}

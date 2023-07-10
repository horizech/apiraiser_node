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
  /// Delete media
  async delete(mediaId: number) {
    const result = await Rest.Delete({
      url: `/API/Media?mediaId=${mediaId}`,
    });
    return result;
  }
  /// Download media
  async download(mediaId: number) {
    const result = await Rest.Get({
      url: `/API/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }
}

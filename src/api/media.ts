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
}

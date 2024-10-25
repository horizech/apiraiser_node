import { Rest } from '../helpers';
import { MediaUploadRequest } from '../interfaces';
import { version, apiraiser, plugin } from '../constants';

/// Media Plugin APIs
export class MediaPlugin {
  /// Upload media
  async upload(mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/${plugin}/Media`,
        data: mediaUploadRequest,
      },
      null,
      {
        'Content-Type': 'multipart/form-data',
      },
    );
    return result;
  }
  /// Update media
  async update(mediaId: string, mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${plugin}/Media/${mediaId}`,
      data: mediaUploadRequest,
    });
    return result;
  }
  /// Delete media
  async delete(mediaId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${plugin}/Media/${mediaId}`,
    });
    return result;
  }
  /// Download media
  async download(mediaId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }
}

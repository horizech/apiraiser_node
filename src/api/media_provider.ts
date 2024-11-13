import { Rest } from '../helpers';
import { MediaUploadRequest } from '../interfaces';
import { version, apiraiser, provider } from '../constants';

/// Media Provider APIs
export class MediaProvider {
  /// Upload media
  async upload(mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/${provider}/Media`,
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
      url: `/${apiraiser}/${version}/${provider}/Media/${mediaId}`,
      data: mediaUploadRequest,
    });
    return result;
  }
  /// Delete media
  async delete(mediaId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${provider}/Media/${mediaId}`,
    });
    return result;
  }
  /// Download media
  async download(mediaId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }

  // Get Plugins
  async getPlugins() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Media/GetPlugins` });
    return result;
  }
}
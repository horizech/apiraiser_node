import { Rest } from '../helpers';
import { MediaUploadRequest } from '../interfaces';
import { version } from '../constants';

/// Media APIs
export class Media {
  /// Get Data
  async getData() {
    const url = `/API/${version}/Media/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Media
  async getMedia(
    filterText?: string,
    mediaType?: string,
    {
      limit,
      offset,
      orderBy,
      orderDescendingBy,
      groupBy,
    }: {
      limit?: number;
      offset?: number;
      orderBy?: string;
      orderDescendingBy?: string;
      groupBy?: string;
    } = {},
  ) {
    const baseUrl = `/API/${version}/Media/GetMedia`;

    const queryParams = new URLSearchParams();
    if (mediaType) queryParams.append('mediaType', mediaType);
    if (orderBy) queryParams.append('orderBy', orderBy);
    if (orderDescendingBy) queryParams.append('orderDescendingBy', orderDescendingBy);
    if (groupBy) queryParams.append('groupBy', groupBy);
    if (limit !== undefined && limit > 0) queryParams.append('limit', limit.toString());
    if (offset !== undefined) queryParams.append('offset', offset.toString());

    const url = `${baseUrl}?${queryParams.toString()}`;
    const result = await Rest.Post({ url, data: filterText });
    return result;
  }

  /// Get Media Count
  async getMediaCount(filterText?: string, mediaType?: string) {
    const url = `/API/${version}/Media/GetMediaCount${mediaType ? '?mediaType=' + mediaType : ''}`;
    const result = await Rest.Post({ url, data: filterText });
    return result;
  }

  /// Upload media
  async upload(mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Post(
      {
        url: `/API/${version}/Media`,
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
      url: `/API/${version}/Media/${mediaId}`,
      data: mediaUploadRequest,
    });
    return result;
  }
  /// Delete media
  async delete(mediaId: string) {
    const result = await Rest.Delete({
      url: `/API/${version}/Media/${mediaId}`,
    });
    return result;
  }
  /// Download media
  async download(mediaId: string) {
    const result = await Rest.Get({
      url: `/API/${version}/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }
}

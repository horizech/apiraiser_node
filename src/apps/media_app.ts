import { Rest } from '../helpers';
import { MediaUploadRequest } from '../interfaces';
import { version, apiraiser, app } from '../constants';

/// Media App APIs
export class MediaApp {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/${app}/Media/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Media
  async getMedia(
    filterText?: string,
    mediaType?: string,
    {
      pageSize: limit,
      page: offset,
      orderBy,
      orderDescendingBy,
      groupBy,
    }: {
      pageSize?: number;
      page?: number;
      orderBy?: string;
      orderDescendingBy?: string;
      groupBy?: string;
    } = {},
  ) {
    const baseUrl = `/${apiraiser}/${version}/${app}/Media/GetMedia`;

    const queryParams = new URLSearchParams();
    if (mediaType) queryParams.append('mediaType', mediaType);
    if (orderBy) queryParams.append('orderBy', orderBy);
    if (orderDescendingBy) queryParams.append('orderDescendingBy', orderDescendingBy);
    if (groupBy) queryParams.append('groupBy', groupBy);
    if (limit !== undefined && limit > 0) queryParams.append('pageSize', limit.toString());
    if (offset !== undefined) queryParams.append('page', offset.toString());

    const url = `${baseUrl}?${queryParams.toString()}`;
    const result = await Rest.Post({ url, data: filterText });
    return result;
  }

  /// Get Media by type
  async getMediaByType(mediaType: string) {
    const baseUrl = `/${apiraiser}/${version}/${app}/Media/MediaByType/${mediaType}`;
    const result = await Rest.Get({ url: baseUrl });
    return result;
  }

  /// Get Media Count
  async getMediaCount(filterText?: string, mediaType?: string) {
    const url = `/${apiraiser}/${version}/${app}/Media/GetMediaCount${mediaType ? '?mediaType=' + mediaType : ''}`;
    const result = await Rest.Post({ url, data: filterText });
    return result;
  }

  /// Upload media
  async upload(mediaUploadRequest: MediaUploadRequest) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/${app}/Media`,
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
  async update(mediaId: string, request: any) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/Media/${mediaId}`,
      data: request,
    });
    return result;
  }
  /// Delete media
  async delete(mediaId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/Media/${mediaId}`,
    });
    return result;
  }
  /// Download media
  async download(mediaId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }

  /// Get Media by Id
  async getMediaById(id?: string) {
    const url = `/${apiraiser}/${version}/${app}/Media/GetMediaById/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }
}

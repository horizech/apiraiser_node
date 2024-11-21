import { Rest } from '../helpers';
import { version, apiraiser, provider } from '../constants';
import {
  S3DeleteFileRequest,
  S3DownloadRequest,
  S3Request,
  S3UploadFolderRequest,
  S3UploadRequest,
} from '../interfaces';

/// S3 Provider APIs
export class S3Provider {
  // Upload File Using Stream
  async uploadFileUsingStream(request: S3UploadRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/S3/UploadFileUsingStream`,
      data: request,
    });
    return result;
  }

  // Upload File Using Path
  async uploadFileUsingPath(request: S3UploadRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/S3/UploadFileUsingPath`,
      data: request,
    });
    return result;
  }

  // Upload File
  async uploadFile(request: S3UploadRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/S3/UploadFile`,
      data: request,
    });
    return result;
  }

  // Download File
  async downloadFile(request: S3DownloadRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/S3/DownloadFile`,
      data: request,
    });
    return result;
  }

  /// Get List Of Buckets
  async getListOfBuckets(request: S3Request) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/S3/GetListOfBuckets`,
      data: request,
    });
    return result;
  }

  // Delete File
  async deleteFile(request: S3DeleteFileRequest) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${provider}/S3/DeleteFile`,
      data: request,
    });
    return result;
  }

  /// Delete By key
  async deleteByKey(key: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/S3/DeleteByKey?key=${key}`,
    });
    return result;
  }

  /// Upload folder
  async uploadFolder(request: S3UploadFolderRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/S3/UploadFolder`,
      data: request,
    });
    return result;
  }

  async getPlugins() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/S3/GetPlugins`,
    });
    return result;
  }
}

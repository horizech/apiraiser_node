import { Rest } from '../helpers';
import { version } from 'prettier';

/// Archive APIs
export class Archive {
  /// Create Archive
  async CreateArchive(path: string, fileName: string) {
    const result = await Rest.Post({
      url: `/API/${version}/Archive/CreateArchive`,
      data: {
        Path: path,
        FileName: fileName,
      },
    });
    return result;
  }
  /// Extract By Path
  async ExtractByPath(path: string, destination: string) {
    const result = await Rest.Post({
      url: `/API/${version}/Archive/ExtractByPath`,
      data: {
        Path: path,
        Destination: destination,
      },
    });
    return result;
  }
  /// Extract By Url
  async ExtractByUrl(url: string, destination: string) {
    const result = await Rest.Post({
      url: `/API/${version}/Archive/ExtractByUrl`,
      data: {
        Url: url,
        Destination: destination,
      },
    });
    return result;
  }
  /// Extract By bytes
  async ExtractByBytes(bytes: any, destination: string) {
    const result = await Rest.Post({
      url: `/API/${version}/Archive/ExtractByBytes`,
      data: {
        Bytes: bytes,
        Destination: destination,
      },
    });
    return result;
  }
  /// Extract Using Storage
  async ExtractUsingStorage(storage: string, destination: string) {
    const result = await Rest.Post({
      url: `/API/${version}/Archive/ExtractUsingStorage?storageId=${storage}&destination=${destination}`,
    });
    return result;
  }
}

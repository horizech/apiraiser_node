import { apiraiser, provider, version } from '../constants';
import { OutputPathPrefix } from '../enums';
import { Rest } from '../helpers';

/// Archive APIs
export class ArchiveProvider {
  /// Create Archive
  async CreateArchive(path: string, fileName: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Archive/CreateArchive`,
      data: {
        Path: path,
        FileName: fileName,
      },
    });
    return result;
  }
  /// Extract By Path
  async ExtractByPath(
    archivePath: string,
    outputPath: string,
    outputPathPrefix: OutputPathPrefix,
    overwriteFiles: boolean,
  ) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Archive/ExtractByPath`,
      data: {
        ArchivePath: archivePath,
        OutputPath: outputPath,
        OutputPathPrefix: outputPathPrefix,
        OverwriteFiles: overwriteFiles,
      },
    });
    return result;
  }
  /// Extract By Url
  async ExtractByUrl(url: string, outputPath: string, outputPathPrefix: OutputPathPrefix, overwriteFiles: boolean) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}Archive/ExtractByUrl`,
      data: {
        url,
        OutputPath: outputPath,
        OutputPathPrefix: outputPathPrefix,
        OverwriteFiles: overwriteFiles,
      },
    });
    return result;
  }
  /// Extract By bytes
  async ExtractByBytes(bytes: any, outputPath: string, outputPathPrefix: OutputPathPrefix, overwriteFiles: boolean) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}Archive/ExtractByBytes`,
      data: {
        Bytes: bytes,
        OutputPath: outputPath,
        OutputPathPrefix: outputPathPrefix,
        OverwriteFiles: overwriteFiles,
      },
    });
    return result;
  }
  /// Extract Using Storage
  async ExtractUsingStorage(
    storage: string,
    outputPath: string,
    outputPathPrefix: OutputPathPrefix,
    overwriteFiles: boolean,
  ) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}Archive/ExtractUsingStorage?storageId=${storage}`,
      data: {
        OutputPath: outputPath,
        OutputPathPrefix: outputPathPrefix,
        OverwriteFiles: overwriteFiles,
      },
    });
    return result;
  }

  async getPlugins() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Archive/GetPlugins`,
    });
    return result;
  }
}

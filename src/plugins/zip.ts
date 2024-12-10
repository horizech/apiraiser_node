import { apiraiser, plugin, version } from '../constants';
import { OutputPathPrefix } from '../enums';
import { Rest } from '../helpers';

/// Zip Archive APIs
export class ZipArchivePlugin {
  /// Create Archive
  async CreateArchive(path: string, fileName: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/Zip/CreateArchive`,
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
      url: `/${apiraiser}/${version}/${plugin}/Zip/ExtractByPath`,
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
      url: `/${apiraiser}/${version}/${plugin}Zip/ExtractByUrl`,
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
      url: `/${apiraiser}/${version}/${plugin}Zip/ExtractByBytes`,
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
      url: `/${apiraiser}/${version}/${plugin}Zip/ExtractUsingStorage?storageId=${storage}`,
      data: {
        OutputPath: outputPath,
        OutputPathPrefix: outputPathPrefix,
        OverwriteFiles: overwriteFiles,
      },
    });
    return result;
  }
}

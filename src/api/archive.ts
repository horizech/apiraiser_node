import { apiraiser, version } from '../constants';
import { OutputPathPrefix } from '../enums';
import { Rest } from '../helpers';


/// Archive APIs
export class Archive {
  /// Create Archive
  async CreateArchive(path: string, fileName: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/Archive/CreateArchive`,
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
      url: `/${apiraiser}/${version}/Archive/ExtractByPath`,
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
      url: `/${apiraiser}/${version}/Archive/ExtractByUrl`,
      data: {
        Url: url,
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
      url: `/${apiraiser}/${version}/Archive/ExtractByBytes`,
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
      url: `/${apiraiser}/${version}/Archive/ExtractUsingStorage?storageId=${storage}`,
      data: {
        OutputPath: outputPath,
        OutputPathPrefix: outputPathPrefix,
        OverwriteFiles: overwriteFiles,
      },
    });
    return result;
  }
}

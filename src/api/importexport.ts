import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version, apiraiser } from '../constants';

/// Import Export APIs
export class ImportExport {
  /// Export Excel
  async ExportExcel(collection: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/ImportExport/ExportExcel/${collection}`,
      data: conditions,
      responseType: 'blob',
    });
    return result;
  }
  /// Import Excel
  async ImportExcel(collection: string, importRequest: { file: any }) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/ImportExport/ImportExcel/${collection}`,
        data: importRequest,
      },
      null,
      {
        'Content-Type': 'multipart/form-data',
      },
    );
    return result;
  }
}

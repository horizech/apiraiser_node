import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version } from '../version';

/// Import Export APIs
export class ImportExport {
  /// Export Excel
  async ExportExcel(table: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/API/${version}/ImportExport/ExportExcel/${table}`,
      data: conditions,
      responseType: 'blob',
    });
    return result;
  }
  /// Import Excel
  async ImportExcel(table: string, importRequest: { file: any }) {
    const result = await Rest.Post({
      url: `/API/${version}/ImportExport/ImportExcel/${table}`,
      data: importRequest,
    });
    return result;
  }
}

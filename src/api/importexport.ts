import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';

/// Import Export APIs
export class ImportExport {
  /// Export Excel
  async ExportExcel(table: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/API/ImportExport/ExportExcel/${table}`,
      data: conditions,
      responseType: 'blob',
    });
    return result;
  }
  /// Import Excel
  async ImportExcel(table: string, file: any) {
    const result = await Rest.Post({
      url: `/API/ImportExport/ImportExcel/${table}`,
      data: {
        file,
      },
    });
    return result;
  }
}

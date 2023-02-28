import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';

/// Import Export APIs
export class ImportExport {  
  /// export excel
  async ExportExcel(table: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/API/ImportExport/ExportExcel/${table}`,
      data: conditions,
      responseType: 'blob'
    });
    return result;
  }
}

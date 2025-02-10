import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version, apiraiser, app } from '../constants';

/// Import Export App APIs
export class ImportExportApp {
  /// Export Excel
  async ExportExcel(collection: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${app}/ImportExport/ExportExcel/${collection}`,
      data: conditions,
      responseType: 'blob',
    });
    return result;
  }
  /// Import Excel
  async ImportExcel(collection: string, importRequest: { file: any }) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/${app}/ImportExport/ImportExcel/${collection}`,
        data: importRequest,
      },
      null,
      {
        'Content-Type': 'multipart/form-data',
      },
    );
    return result;
  }

  async GetTemplate(collection: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/ImportExport/GetTemplate/${collection}`,
      responseType: 'blob',
    });
    return result;
  }
}

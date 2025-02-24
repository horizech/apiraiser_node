import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version, apiraiser, app } from '../constants';

/// Import Export App APIs
export class ImportExportApp {
  /// Export Excel
  async ExportExcel(collection: string, conditions: QuerySearchItem[] = [], locale: string) {
    let url = `/${apiraiser}/${version}/${app}/ImportExport/ExportExcel/${collection}`;

    if (locale) {
      url += `?locale=${locale}`;
    }

    const result = await Rest.Post({
      url,
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

  async GetTemplate(collection: string, locale: string) {
    let url = `/${apiraiser}/${version}/${app}/ImportExport/GetTemplate/${collection}`;

    if (locale) {
      url += `?locale=${locale}`;
    }

    const result = await Rest.Get({
      url,
      responseType: 'blob',
    });

    return result;
  }
}

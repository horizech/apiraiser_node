import { Rest } from '../helpers';
import { QuerySearchItem } from '../interfaces';
import { version, apiraiser, plugin } from '../constants';

/// Import Export Plugin APIs
export class ImportExportPlugin {
  /// Export Excel
  async ExportExcel(collection: string, conditions: QuerySearchItem[] = [], locale: string) {
    let url = `/${apiraiser}/${version}/${plugin}/ImportExport/ExportExcel/${collection}`;

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
        url: `/${apiraiser}/${version}/${plugin}/ImportExport/ImportExcel/${collection}`,
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
    let url = `/${apiraiser}/${version}/${plugin}/ImportExport/GetTemplate/${collection}`;

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

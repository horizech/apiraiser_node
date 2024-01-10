import { Rest } from '../helpers';
import { ColumnInfo } from '../interfaces';
import { version } from '../version';

/// Column APIs
export class Column {
  /// Get predefined columns

  async getPredefinedColumns() {
    const result = await Rest.Get({ url: `/API/${version}/GetPredefinedColumns` });
    return result;
  }

  /// Get columns
  async get(table: string) {
    const result = await Rest.Get({ url: `/API/${version}/${table}/Columns` });
    return result;
  }

  /// Add a new column
  async insert(table: string, columnInfo: ColumnInfo) {
    const result = await Rest.Post({
      url: `/API/${version}/${table}/Column`,
      data: columnInfo,
    });
    return result;
  }

  /// Remove column
  async delete(table: string, column: string) {
    const result = await Rest.Delete({ url: `/API/${version}/${table}/Column/${column}` });
    return result;
  }
}

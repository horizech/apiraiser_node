import { Rest } from '../helpers';
import { ColumnInfo } from '../interfaces';
import { version } from '../version';

/// Column APIs
export class Column {
  /// Get predefined columns

  async getPredefinedColumns() {
    const result = await Rest.Get({ url: `/API/${version}/Column/GetPredefinedColumns` });
    return result;
  }

  /// Get columns
  async get(table: string) {
    const result = await Rest.Get({ url: `/API/${version}/Column/${table}` });
    return result;
  }

  /// Add a new column
  async insert(table: string, columnInfo: ColumnInfo) {
    const result = await Rest.Post({
      url: `/API/${version}/Column/${table}`,
      data: columnInfo,
    });
    return result;
  }

  /// Remove column
  async delete(table: string, column: string) {
    const result = await Rest.Delete({ url: `/API/${version}/Column/${table}/${column}` });
    return result;
  }
}

import { Rest } from '../helpers';
import { ColumnInfo } from '../interfaces';

/// Column APIs
export class Column {
  /// Get predefined columns

  async getPredefinedColumns() {
    const result = await Rest.Get({ url: `/API/v1/GetPredefinedColumns` });
    return result;
  }

  /// Get columns
  async get(table: string) {
    const result = await Rest.Get({ url: `/API/v1/${table}/Columns` });
    return result;
  }

  /// Add a new column
  async insert(table: string, columnInfo: ColumnInfo) {
    const result = await Rest.Post({
      url: `/API/v1/${table}/Column`,
      data: columnInfo,
    });
    return result;
  }

  /// Remove column
  async delete(table: string, column: string) {
    const result = await Rest.Delete({ url: `/API/v1/${table}/Column/${column}` });
    return result;
  }
}

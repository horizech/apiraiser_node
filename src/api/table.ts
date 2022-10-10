import { Rest } from '../helpers';
import { ColumnInfo } from '../interfaces';

/// Table APIs
export class Table {
  /// Create a new table

  async create(table: string, tableType: string, columns: ColumnInfo[] = []) {
    const result = await Rest.Post({
      url: `/API/CreateTable?table=${table}&tableType=${tableType}`,
      data: columns
    });
    return result;
  }

  /// Get all tables
  async getList() {
    const result = await Rest.Get({ url: '/API/GetTablesList' });
    return result;
  }
}

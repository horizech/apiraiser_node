import { Rest } from '../helpers';
import { ColumnInfo } from '../interfaces';

/// Table APIs
export class Table {
  /// Create a new table

  async create(table: string, tableCollection: string, columns: ColumnInfo[] = []) {
    const result = await Rest.Post({
      url: `/API/CreateTable?table=${table}&tableCollection=${tableCollection}`,
      data: columns,
    });
    return result;
  }

  /// Get all tables
  async getList() {
    const result = await Rest.Get({ url: '/API/GetTablesList' });
    return result;
  }
}

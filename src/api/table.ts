import { Rest } from '../helpers';
import { ColumnInfo } from '../interfaces';
import { CreateTableUsingDefinitionFileRequest } from '../interfaces/create_table_using_definition_file_request';

/// Table APIs
export class Table {
  /// Create a new table
  async create(table: string, tags: string, columns: ColumnInfo[] = []) {
    const result = await Rest.Post({
      url: `/API/v1/CreateTable?table=${table}&tags=${tags}`,
      data: columns,
    });
    return result;
  }

  /// Create a new table using Definition File
  async createUsingDefinitionFile(request: CreateTableUsingDefinitionFileRequest) {
    const result = await Rest.Post({
      url: `/API/v1/CreateTableUsingDefinitionFile`,
      data: request,
    });
    return result;
  }

  /// Delete a table
  async delete(table: string) {
    const result = await Rest.Delete({
      url: `/API/v1/DeleteTable?table=${table}`,
    });
    return result;
  }

  /// Download table Definition File
  async downloadDefinitionFile(table: string) {
    const result = await Rest.Get({
      url: `/API/v1/DownloadTableDefinitionFile/${table}`,
      responseType: 'blob',
    });
    return result;
  }

  /// Get all tables
  async getList() {
    const result = await Rest.Get({ url: '/API/v1/GetTablesList' });
    return result;
  }
}

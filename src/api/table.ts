import { Rest } from '../helpers';
import { AttributeInfo } from '../interfaces';
import { CreateCollectionUsingDefinitionFileRequest } from '../interfaces/create_collection_using_definition_file_request';
import { version } from '../version';

/// Table APIs
export class Table {
  /// Create a new table
  async create(table: string, tags: string, columns: AttributeInfo[] = []) {
    const result = await Rest.Post({
      url: `/API/${version}/Table?table=${table}&tags=${tags}`,
      data: columns,
    });
    return result;
  }

  /// Create a new table using Definition File
  async createUsingDefinitionFile(request: CreateCollectionUsingDefinitionFileRequest) {
    const result = await Rest.Post(
      {
        url: `/API/${version}/Table/CreateTableUsingDefinitionFile`,
        data: request,
      },
      null,
      {
        'Content-Type': 'multipart/form-data',
      },
    );
    return result;
  }

  /// Delete a table
  async delete(table: string) {
    const result = await Rest.Delete({
      url: `/API/${version}/Table?table=${table}`,
    });
    return result;
  }

  /// Download table Definition File
  async downloadDefinitionFile(table: string) {
    const result = await Rest.Get({
      url: `/API/${version}/Table/DownloadTableDefinitionFile/${table}`,
      responseType: 'blob',
    });
    return result;
  }

  /// Get all tables
  async getList() {
    const result = await Rest.Get({ url: `/API/${version}/Table` });
    return result;
  }
}

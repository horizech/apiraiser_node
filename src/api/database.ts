import { Rest } from '../helpers';
import { AttributeInfo, QuerySearchItem } from '../interfaces';
import { CreateCollectionUsingDefinitionFileRequest } from '../interfaces/create_collection_using_definition_file_request';
import { version } from '../version';

/// Database APIs
export class Database {
  /// Get audit attributes
  async getAuditAttributes() {
    const result = await Rest.Get({ url: `/API/${version}/Database/Attribute/GetAuditAttributes` });
    return result;
  }

  /// Get Collection Attributes
  async getCollectionAttributes(collection: string) {
    const result = await Rest.Get({ url: `/API/${version}/Database/Attribute/${collection}` });
    return result;
  }

  /// Add a new attribute
  async insertAttribute(collection: string, attributeInfo: AttributeInfo) {
    const result = await Rest.Post({
      url: `/API/${version}/Database/Attribute/${collection}`,
      data: attributeInfo,
    });
    return result;
  }

  /// Remove Attribute
  async deleteAttribute(collection: string, attribute: string) {
    const result = await Rest.Delete({ url: `/API/${version}/Database/Attribute/${collection}/${attribute}` });
    return result;
  }

  /// Create a new collection
  async createCollection(collection: string, tags: string, attributes: AttributeInfo[] = []) {
    const result = await Rest.Post({
      url: `/API/${version}/Database/Collection?table=${collection}&tags=${tags}`,
      data: attributes,
    });
    return result;
  }

  /// Create a new collection using Definition File
  async createCollectionUsingDefinitionFile(request: CreateCollectionUsingDefinitionFileRequest) {
    const result = await Rest.Post(
      {
        url: `/API/${version}/Database/Collection/CreateCollectionUsingDefinitionFile`,
        data: request,
      },
      null,
      {
        'Content-Type': 'multipart/form-data',
      },
    );
    return result;
  }

  /// Delete a collection
  async deleteCollection(collection: string) {
    const result = await Rest.Delete({
      url: `/API/${version}/Database/Collection?table=${collection}`,
    });
    return result;
  }

  /// Download collection Definition File
  async downloadCollectionDefinitionFile(collection: string) {
    const result = await Rest.Get({
      url: `/API/${version}/Database/Collection/DownloadCollectionDefinitionFile/${collection}`,
      responseType: 'blob',
    });
    return result;
  }

  /// Get all collections
  async getCollectionList() {
    const result = await Rest.Get({ url: `/API/${version}/Database/Collection` });
    return result;
  }

  /// Insert a new record
  async insertRecord(collection: string, data: object) {
    const result = await Rest.Post({ url: `/API/${version}/Database/Record/${collection}`, data });
    return result;
  }

  /// Get record by id
  async getRecordById(collection: string, id: string) {
    const result = await Rest.Get({ url: `/API/${version}/Database/Record/${collection}/${id}` });
    return result;
  }

  /// Update record by id
  async updateRecord(collection: string, id: string, data: object) {
    const result = await Rest.Put({ url: `/API/${version}/Database/Record/${collection}/${id}`, data });
    return result;
  }

  /// Delete record by id
  async deleteRecord(collection: string, id: string) {
    const result = await Rest.Delete({ url: `/API/${version}/Database/Record/${collection}/${id}` });
    return result;
  }

  /// Get count
  async getRecordsCount(collection: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Post({
      url: `/API/${version}/Database/Record/${collection}/GetCount`,
      data: conditions,
    });
    return result;
  }

  /// Insert a list of records
  async insertRecordsList(collection: string, data: object[]) {
    const result = await Rest.Post({ url: `/API/${version}/Database/Record/${collection}/InsertRecords`, data });
    return result;
  }

  /// Update records by conditions
  async updateRecordsByConditions(collection: string, data: object[], conditions: QuerySearchItem[] = []) {
    const result = await Rest.Put({
      url: `/API/${version}/Database/Record/${collection}/UpdateRecords`,
      data: {
        Data: data,
        Parameters: conditions,
      },
    });
    return result;
  }
  /// Delete records by conditions
  async deleteRecordsByConditions(collection: string, conditions: QuerySearchItem[] = []) {
    const result = await Rest.Delete({
      url: `/API/${version}/Database/Record/${collection}/DeleteRecords`,
      data: conditions,
    });
    return result;
  }

  /// Delete records by ids
  async deleteRecordsByIds(collection: string, ids: string[]) {
    const result = await Rest.Delete({
      url: `/API/${version}/Database/Record/${collection}/DeleteRecordsByIds`,
      data: ids,
    });
    return result;
  }

  /// Get records
  async getRecords(
    table: string,
    {
      limit,
      offset,
      orderBy,
      orderDescendingBy,
      groupBy,
      conditions,
    }: {
      limit?: number;
      offset?: number;
      orderBy?: string;
      orderDescendingBy?: string;
      groupBy?: string;
      conditions?: QuerySearchItem[];
    } = {},
  ) {
    const baseUrl = `/API/${version}/Database/Record/GetRecords/${table}`;

    const queryParams: URLSearchParams = new URLSearchParams();
    if (orderBy) queryParams.append('orderBy', orderBy);
    if (orderDescendingBy) queryParams.append('orderDescendingBy', orderDescendingBy);
    if (groupBy) queryParams.append('groupBy', groupBy);
    if (limit !== undefined && limit > 0) queryParams.append('limit', limit.toString());
    if (offset !== undefined) queryParams.append('offset', offset.toString());

    const url = `${baseUrl}?${queryParams.toString()}`;

    const result = await Rest.Post({
      url: url,
      data: conditions || [],
    });

    return result;
  }
}

import { Rest } from '../helpers';
import { AttributeInfo } from '../interfaces';
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
}

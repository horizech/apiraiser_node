import { Rest } from '../helpers';
import { AttributeInfo } from '../interfaces';
import { version, apiraiser, app } from '../constants';
import { CreateCollectionUsingDefinitionFileRequest } from '../interfaces/create_collection_using_definition_file_request';

/// CollectionsStudio APIs
export class CollectionsStudio {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/${app}/CollectionsStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Add a new attribute
  async insertAttribute(collection: string, attributeInfo: AttributeInfo) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Attribute/${collection}`,
      data: attributeInfo,
    });
    return result;
  }

  /// Get Attributes
  async getAttributes(collection: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Attributes/${collection}`,
    });
    return result;
  }

  /// Remove Attribute
  async deleteAttribute(collection: string, attribute: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Attribute/${collection}/${attribute}`,
    });
    return result;
  }

  /// Modify Collection
  async modifyCollection(data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Collection`,
      data: data,
    });
    return result;
  }

  /// Delete a collection
  async deleteCollection(collection: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Collection/${collection}`,
    });
    return result;
  }

  // Get Foreign Collections
  async getForeignCollections() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/GetForeignCollections`,
    });
    return result;
  }

  /// Create a new collection
  async createCollection(collection: string, tags: string, attributes: AttributeInfo[] = []) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Collection/${collection}?tags=${tags}`,
      data: attributes,
    });
    return result;
  }

  /// Create a new collection using Definition File
  async createCollectionUsingDefinitionFile(request: CreateCollectionUsingDefinitionFileRequest) {
    const result = await Rest.Post(
      {
        url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Collection/CreateCollectionUsingDefinitionFile`,
        data: request,
      },
      null,
      {
        'Content-Type': 'multipart/form-data',
      },
    );
    return result;
  }
  /// Download collection Definition File
  async downloadCollectionDefinitionFile(collection: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/CollectionsStudio/Collection/DownloadCollectionDefinitionFile/${collection}`,
      responseType: 'blob',
    });
    return result;
  }
}

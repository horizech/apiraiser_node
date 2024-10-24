import { Rest } from '../helpers';
import { AttributeInfo } from '../interfaces';
import { version, apiraiser } from '../constants';

/// CollectionsStudio APIs
export class CollectionsStudio {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/CollectionsStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Add a new attribute
  async insertAttribute(collection: string, attributeInfo: AttributeInfo) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/CollectionsStudio/AddAttribute?collection=${collection}`,
      data: attributeInfo,
    });
    return result;
  }

  async modifyCollection(data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/CollectionsStudio/ModifyCollection`,
      data: data,
    });
    return result;
  }

  /// Remove Attribute
  async deleteAttribute(collection: string, attribute: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/CollectionsStudio/DeleteAttribute?collection=${collection}&attribute=${attribute}`,
    });
    return result;
  }

  /// Delete a collection
  async deleteCollection(collection: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/CollectionsStudio/DeleteCollection?collection=${collection}`,
    });
    return result;
  }

  // Get Foreign Collections
  async getForeignCollections() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/CollectionsStudio/GetForeignCollections`,
    });
    return result;
  }
}

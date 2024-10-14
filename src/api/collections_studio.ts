import { Rest } from '../helpers';
import { AttributeInfo } from '../interfaces';
import { version } from '../version';

/// CollectionsStudio APIs
export class CollectionsStudio {
  /// Get Data
  async getData() {
    const url = `/API/${version}/CollectionsStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Add a new attribute
  async insertAttribute(collection: string, attributeInfo: AttributeInfo) {
    const result = await Rest.Post({
      url: `/API/${version}/CollectionsStudio/AddAttribute?collection=${collection}`,
      data: attributeInfo,
    });
    return result;
  }

  /// Remove Attribute
  async deleteAttribute(collection: string, attribute: string) {
    const result = await Rest.Delete({
      url: `/API/${version}/CollectionsStudio/DeleteAttribute?collection=${collection}&attribute=${attribute}`,
    });
    return result;
  }

  /// Delete a collection
  async deleteCollection(collection: string) {
    const result = await Rest.Delete({
      url: `/API/${version}/CollectionsStudio/DeleteCollection?collection=${collection}`,
    });
    return result;
  }
}

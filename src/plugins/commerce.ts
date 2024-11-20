import { Rest } from '../helpers';
import { FindProductRequest } from '../interfaces/find_product_request';
import { version, apiraiser, plugin } from '../constants';

/// Commerce Plugin APIs
export class CommercePlugin {
  /// Find attribute value
  async findAttributeValues(collection: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/Commerce/FindAttributeValues?collection=${collection}`,
    });
    return result;
  }

  /// Find products
  async findProducts(request: FindProductRequest) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${plugin}/Commerce/FindProducts`, data: request });
    return result;
  }
}

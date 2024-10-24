import { Rest } from '../helpers';
import { FindProductRequest } from '../interfaces/find_product_request';
import { version, apiraiser } from '../constants';

/// Commerce APIs
export class Commerce {
  /// Find attribute value
  async findAttributeValues(collection: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/Commerce/FindAttributeValues?collection=${collection}`,
    });
    return result;
  }

  /// Find products
  async findProducts(request: FindProductRequest) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/Commerce/FindProducts`, data: request });
    return result;
  }
}

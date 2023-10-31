import { Rest } from '../helpers';
import { FindProductRequest } from '../interfaces/find_product_request';

/// Commerce APIs
export class Commerce {
  /// Find attribute value
  async findAttributeValues(collection: string) {
    const result = await Rest.Get({ url: `/API/v1/Commerce/FindAttributeValues?collection=${collection}` });
    return result;
  }

  /// Find products
  async findProducts(request: FindProductRequest) {
    const result = await Rest.Post({ url: `/API/v1/Commerce/FindProducts`, data: request });
    return result;
  }
}

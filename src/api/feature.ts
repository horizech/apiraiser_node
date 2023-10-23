import { Rest } from '../helpers';

/// Feature APIs
export class Feature {
  /// Install a new Feature
  async install(feature: string) {
    const result = await Rest.Post({
      url: `/API/v1/Feature/Install?feature=${feature}`,
    });
    return result;
  }

  /// Get Features List
  async getList() {
    const result = await Rest.Get({
      url: `/API/v1/Feature/GetList`,
    });
    return result;
  }

  /// Delete a feature
  async delete(feature: string) {
    const result = await Rest.Delete({
      url: `/API/v1/Feature/Delete?feature=${feature}`,
    });
    return result;
  }
}

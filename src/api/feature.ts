import { Rest } from '../helpers';
import { version } from '../version';

/// Feature APIs
export class Feature {
  /// Install a new Feature
  async install(feature: string) {
    const result = await Rest.Post({
      url: `/API/${version}/Feature/Install?feature=${feature}`,
    });
    return result;
  }

  /// Get Features List
  async getList() {
    const result = await Rest.Get({
      url: `/API/${version}/Feature/GetList`,
    });
    return result;
  }

  /// Delete a feature
  async delete(feature: string) {
    const result = await Rest.Delete({
      url: `/API/${version}/Feature/Delete?feature=${feature}`,
    });
    return result;
  }
}

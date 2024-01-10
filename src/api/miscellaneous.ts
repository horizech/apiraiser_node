import { Rest } from '../helpers';
import { version } from '../version';

/// Miscellaneous APIs
export class Miscellaneous {
  /// Get list of all actions
  async getAllActions() {
    const result = await Rest.Get({ url: `/API/${version}/Apiraiser/GetAllActions` });
    return result;
  }

  /// Get Apiraiser information
  async getInfo() {
    const result = await Rest.Get({ url: `/API/${version}/Apiraiser/GetInfo` });
    return result;
  }
}

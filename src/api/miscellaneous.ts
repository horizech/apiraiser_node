import { Rest } from '../helpers';

/// Miscellaneous APIs
export class Miscellaneous {
  /// Get list of all actions
  async getAllActions() {
    const result = await Rest.Get({ url: `/API/v1/Apiraiser/GetAllActions` });
    return result;
  }

  /// Get Apiraiser information
  async getInfo() {
    const result = await Rest.Get({ url: `/API/v1/Apiraiser/GetInfo` });
    return result;
  }
}

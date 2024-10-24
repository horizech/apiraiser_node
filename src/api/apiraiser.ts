import { version, apiraiser } from '../constants';
import { Rest } from '../helpers';
import { InitializeRequest } from '../interfaces';

/// Apiraiser APIs
export class Apiraiser {
  /// Is Apiraiser Initialized
  async isInitialized() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/IsInitialized` });
    return result;
  }

  /// Initialize Apiraiser CMS
  async initialize(initializeRequest: InitializeRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/Initialize`,
      data: initializeRequest,
    });
    return result;
  }

  /// Get list of all actions
  async getAllActions() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/GetAllActions` });
    return result;
  }

  /// Get Home
  async getHome() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/GetHome` });
    return result;
  }

  /// Get Apiraiser information
  async getInfo() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/GetInfo` });
    return result;
  }
}

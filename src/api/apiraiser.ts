import { version } from '../version';
import { Rest } from '../helpers';
import { InitializeRequest } from '../interfaces';

/// Apiraiser APIs
export class Apiraiser {
  /// Is Apiraiser Initialized
  async isInitialized() {
    const result = await Rest.Get({ url: `/API/${version}/Apiraiser/IsInitialized` });
    return result;
  }

  /// Initialize Apiraiser CMS
  async initialize(initializeRequest: InitializeRequest) {
    const result = await Rest.Post({
      url: `/API/${version}/Apiraiser/Initialize`,
      data: initializeRequest,
    });
    return result;
  }

  /// Get list of all actions
  async getAllActions() {
    const result = await Rest.Get({ url: `/API/${version}/Apiraiser/GetAllActions` });
    return result;
  }

  /// Get Home
  async getHome() {
    const result = await Rest.Get({ url: `/API/${version}/Apiraiser/GetHome` });
    return result;
  }

  /// Get Apiraiser information
  async getInfo() {
    const result = await Rest.Get({ url: `/API/${version}/Apiraiser/GetInfo` });
    return result;
  }
}

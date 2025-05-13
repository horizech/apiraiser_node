import { version, apiraiser } from '../constants';
import { Rest, State } from '../helpers';
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
    return await State.processAuthenticationResult(result);
  }

  /// Perform Pre-Initialize Check
  async performPreInitializeCheck() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/PerformPreInitializeCheck`,
    });
    return await result;
  }

  /// Reboot Server
  async rebootServer() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/RebootServer`,
    });
    return await result;
  }

  /// Download Component
  async downloadComponent(type: string, code: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/DownloadComponent/${type}/${code}`,
    });
    return await result;
  }

  /// Set Configuration
  async setConfiguration(values: any) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/SetConfiguration`,
      data: values,
    });
    return await result;
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

  /// Get Components Info
  async getComponentsInfo() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/ComponentsInfo` });
    return result;
  }

  /// Get Apiraiser information
  async getInfo() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/GetInfo` });
    return result;
  }

  // Get Favicon
  async getFavicon() {
    const result = await Rest.Get({ url: `/Favicon.ico` });
    return result;
  }
}

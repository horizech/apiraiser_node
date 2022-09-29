import axios from 'axios';
import { Headers, State, JsonHelper, Rest } from '../helpers';
import { InitializeRequest } from '../interfaces';

/// Initialization APIs
export class Initialization {
  /// Is Apiraiser Initialized
  static async isInitialized() {
    const result = await Rest.Get({ url: `/API/Apiraiser/IsInitialized` });
    return result;
  }

  /// Initialize Apiraiser CMS
  async initialize(initializeRequest: InitializeRequest) {
    const result = await Rest.Post({
      url: `/API/Apiraiser/Initialize`,
      data: JsonHelper.toJsonObject<InitializeRequest>(initializeRequest),
    });
    return result;
  }
}

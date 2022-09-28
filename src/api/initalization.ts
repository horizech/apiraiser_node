import axios from 'axios';
import { Headers, State } from '../helpers';
import { InitializeRequest } from '../models';

/// Initialization APIs
export class Initialization {
  /// Is Apiraiser Initialized
  static async isInitialized() {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/Apiraiser/IsInitialized`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Initialize Apiraiser CMS
  async initialize(initializeRequest: InitializeRequest) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/Apiraiser/Initialize`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(initializeRequest.toJsonObject),
    });
    return result;
  }
}

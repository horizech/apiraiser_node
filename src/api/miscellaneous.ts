import axios from 'axios';
import { Headers, State } from '../helpers';

/// Miscellaneous APIs
export class Miscellaneous {
  /// Get list of all actions
  static async getAllActions() {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/Apiraiser/GetAllActions`,
      headers: Headers.getHeaders(),
    });
    return result;
  }
  /// Get Apiraiser information
  static async getInfo() {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/Apiraiser/GetInfo`,
      headers: Headers.getHeaders(),
    });
    return result;
  }
}

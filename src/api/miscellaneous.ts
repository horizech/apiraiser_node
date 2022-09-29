import axios from 'axios';
import { Headers, Rest, State } from '../helpers';

/// Miscellaneous APIs
export class Miscellaneous {
  /// Get list of all actions
  static async getAllActions() {
    const result = await Rest.Get({ url: `/API/Apiraiser/GetAllActions` });
    return result;
  }
  /// Get Apiraiser information
  static async getInfo() {
    const result = await Rest.Get({ url: `/API/Apiraiser/GetInfo` });
    return result;
  }
}

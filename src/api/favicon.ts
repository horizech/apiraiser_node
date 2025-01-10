import { version, apiraiser } from '../constants';
import { Rest, State } from '../helpers';
import { InitializeRequest } from '../interfaces';

/// Favivon APIs
export class Favicon {
  /// Get Favicon URL
  async getFavicon() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/Favicon.ico` });
    return result;
  }
}

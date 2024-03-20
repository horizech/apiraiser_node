import { State } from './state';

/// Headers class responsible for handing http headers
export class Headers {
  /// Get headers by adding Authorization header if jwt exists
  static getHeaders(jwt: null | string = null) {
    const headers: any = {
      'Content-Type': 'application/json',
    };
    if (jwt || State.accessToken) {
      headers.Authorization = `Bearer ${jwt || State.accessToken}`;
    }
    return headers;
  }
}

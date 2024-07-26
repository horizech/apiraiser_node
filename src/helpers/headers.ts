import { State } from './state';

/// Headers class responsible for handing http headers
export class Headers {
  /// Get headers by adding Authorization header if jwt exists
  static getHeaders(jwt: null | string = null, contentType: null | any = null) {
    let headers: any = null;
    if (contentType) {
      headers = contentType;
    } else {
      headers = {
        'Content-Type': 'application/json',
      };
    }
    if (jwt || State.accessToken) {
      headers.Authorization = `Bearer ${jwt || State.accessToken}`;
    }
    return headers;
  }
}

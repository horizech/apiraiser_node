import { State } from "./state";

/// Headers class responsible for handing http headers
export class Headers {
  /// Get headers by adding Authorization header if jwt exists
  static getHeaders() {
    let headers: any = {
      "Content-Type": "application/json"
    };
    if (State.jwt) {
      headers["Authorization"] =  "Bearer ${State.jwt}";
    }
    return headers;
  }
}

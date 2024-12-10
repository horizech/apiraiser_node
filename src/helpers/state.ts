import { APIResult, User } from '../interfaces';
import { WebSocketHelper } from './websocket_helper';

/// State class containing the token and endpoint
export class State {
  /// Access Token
  static accessToken?: string;

  /// Refresh Token
  static refreshToken?: string;

  /// Endpoint
  static endPoint?: string;

  /// WebSocket Endpoint
  static webSocketEndpoint?: string;

  /// WebSocket Server
  static webSocketServer?: any; // WebSocket.Server<typeof WebSocket, typeof IncomingMessage> ;

  /// WebSocket Helper
  static webSocketHelper?: WebSocketHelper;

  /// User
  static user?: User;

  /// save provided [Session] in state and local storage for future use
  static SaveSessionInLocalStorage(accessToken?: string, refreshToken?: string) {
    State.accessToken = accessToken;
    State.refreshToken = refreshToken;
    if (accessToken) {
      window.localStorage.setItem('access_token', accessToken);
    }
    if (refreshToken) {
      window.localStorage.setItem('refresh_token', refreshToken);
    }
  }

  /// Load session from local storage
  static loadSessionFromLocalStorage() {
    State.accessToken = window.localStorage.getItem('access_token') ?? undefined;
    State.refreshToken = window.localStorage.getItem('refresh_token') ?? undefined;
  }

  /// Process authentication result from [auth] as current user and returns [auth] back
  ///
  /// Loads user and jwt if successful, otherwise clears the jwt and current user.
  static async processAuthenticationResult(auth: APIResult) {
    if (auth.Success && auth.Data) {
      try {
        /// The result seems good, load the user and jwt from it
        const newAuth: APIResult = Object.assign({}, auth);
        newAuth.Data!.roleIds = newAuth.Data.Roles?.map((role: any) => role.Id);
        newAuth.Data!.roleNames = newAuth.Data.Roles?.map((role: any) => role.Name);
        State.user = newAuth.Data;
        if (newAuth.Data.AccessToken) {
          State.accessToken = newAuth.Data.AccessToken;
        }
        if (newAuth.Data.RefreshToken) {
          State.refreshToken = newAuth.Data.RefreshToken;
        }
        this.SaveSessionInLocalStorage(State.accessToken, State.refreshToken);
        return newAuth;
      } catch (e) {
        return {
          Success: false,
          ErrorCode: null,
          Message: e,
          Data: null,
          SuccessCode: null,
          AdditionalSuccessInformation: null,
          AdditionalErrorInformation: null,
        };
      }
    } else {
      return auth;
    }
  }

  /// Clear user
  static clearUser() {
    State.user = undefined;
  }
  /// Clear Session From Local Storage
  static clearSessionFromLocalStorage() {
    State.accessToken = undefined;
    State.refreshToken = undefined;
    localStorage.clear();
  }

  /// Clear session
  static clearSession() {
    State.clearSessionFromLocalStorage();
    State.clearUser();
  }
}

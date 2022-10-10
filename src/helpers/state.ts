import { APIResult, User } from '../interfaces';

/// State class containing the token and endpoint
export class State {
  /// JWT Token
  static jwt?: string;

  /// Endpoint
  static endPoint?: string;

  /// User
  static user?: User;

  /// Process authentication result from [auth] as current user and returns [auth] back
  ///
  /// Loads user and jwt if successful, otherwise clears the jwt and current user.
  static async processAuthenticationResult(auth: APIResult) {
    if (auth.Success) {
      try {
        /// The result seems good, load the user and jwt from it
        const newAuth: APIResult = Object.assign({}, auth);
        newAuth.Data!.roleIds = newAuth.Data.Roles?.map((role: any) => role.Id);
        newAuth.Data!.roleNames = newAuth.Data.Roles?.map((role: any) => role.Name);
        State.user = newAuth.Data;
        State.jwt = newAuth.Data.Token;
        return newAuth;
      } catch (e) {
        return {
          Success: false,
          ErrorCode: null,
          Message: e,
          Data: null,
        };
      }
    } else {
      /// The result was unsuccessful, clear the session if exists
      await State.clearSession();
      return auth;
    }
  }

  /// Clear jwt
  static clearUser() {
    State.user = undefined;
  }

  /// Clear session
  static async clearSession() {
    State.clearUser();
  }
}

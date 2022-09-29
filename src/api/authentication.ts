import { JsonHelper, Rest } from '../helpers';
import { State } from '../helpers/state';
import { APIResult, LoginRequest, SignupRequest } from '../interfaces';

/// Authentication APIs
export class Authentication {
  /// Login
  async login(loginRequest: LoginRequest) {
    const result = await Rest.Post({
      url: '/API/Authentication/Login',
      data: JsonHelper.toJsonObject<LoginRequest>(loginRequest),
    });
    return await State.processAuthenticationResult(result);
  }

  /// Signup
  async signup(signupRequest: SignupRequest) {
    const result = await Rest.Post({
      url: '/API/Authentication/Signup',
      data: JsonHelper.toJsonObject<SignupRequest>(signupRequest),
    });
    return await State.processAuthenticationResult(result);
  }

  /// Load last session
  async loadLastSession() {
    const jwt: string = await State.loadJwt();
    if (jwt) {
      const result = await Rest.Get({ url: '/API/Authentication/AuthLogin' });
      return State.processAuthenticationResult(result);
    } else {
      return { success: false, message: 'No previous session found!' };
    }
  }

  /// Whether the user is signed in
  async isSignedIn() {
    return State.jwt ? true : false;
  }

  /// Get current signed in user
  async getCurrentUser() {
    return State.user;
  }

  /// Signout user by clearing session
  async signOut() {
    await State.clearSession();
  }
}

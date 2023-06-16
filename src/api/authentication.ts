import { Rest } from '../helpers';
import { State } from '../helpers/state';
import { LoginRequest, SignupRequest } from '../interfaces';

/// Authentication APIs
export class Authentication {
  /// Login
  async login(loginRequest: LoginRequest) {
    const result = await Rest.Post({
      url: '/API/Authentication/Login',
      data: { ...{ username: null, email: null }, ...loginRequest },
    });
    return await State.processAuthenticationResult(result);
  }

  /// Signup
  async signup(signupRequest: SignupRequest) {
    const result = await Rest.Post({
      url: '/API/Authentication/Signup',
      data: signupRequest,
    });
    return await State.processAuthenticationResult(result);
  }

  /// Load last session
  async loadSessionUsingJwt(jwt: string) {
    if (jwt) {
      const result = await Rest.Get({ url: '/API/Authentication/AuthLogin' }, jwt);
      return State.processAuthenticationResult(result);
    } else {
      return {
        Success: false,
        ErrorCode: null,
        Message: 'Please provide JWT token!',
        Data: null,
      };
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

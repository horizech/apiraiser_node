import { Rest } from '../helpers';
import { State } from '../helpers/state';
import { LoginRequest, SignupRequest } from '../interfaces';

/// Authentication APIs
export class Authentication {
  /// Login
  async login(loginRequest: LoginRequest) {
    const result = await Rest.Post({
      url: '/API/v1/Authentication/Login',
      data: { ...{ username: null, email: null }, ...loginRequest },
    });
    return await State.processAuthenticationResult(result);
  }

  /// Signup
  async signup(signupRequest: SignupRequest) {
    const result = await Rest.Post({
      url: '/API/v1/Authentication/Signup',
      data: signupRequest,
    });
    return await State.processAuthenticationResult(result);
  }

  /// Load last session
  async loadSessionUsingJwt(jwt: string) {
    if (jwt) {
      State.jwt = jwt;
      const result = await Rest.Get({ url: '/API/v1/Authentication/LoadSessionUsingJwt' }, jwt);
      return result;
    } else {
      return {
        Success: false,
        ErrorCode: null,
        Message: 'Please provide JWT token!',
        Data: null,
      };
    }
  }

  /// Refresh token
  async refreshToken(jwt: string) {
    if (jwt) {
      const result = await Rest.Get({ url: '/API/v1/Authentication/RefreshToken' }, jwt);
      return result;
    } else {
      return {
        Success: false,
        ErrorCode: null,
        Message: 'Please provide JWT token!',
        Data: null,
      };
    }
  }

  /// Reset Password
  async resetPassword(token: string, password: string, confirmPassword: string) {
    var result = await Rest.Post({
      url: '/API/v1/Authentication/ResetPassword',
      data: {
        Token: token,
        Password: password,
        ConfirmPassword: confirmPassword,
      },
    });
    return result;
  }

  /// Forgot Password
  async forgotPassword(email: string) {
    var result = await Rest.Post({
      url: '/API/v1/Authentication/ForgotPassword',
      data: email,
    });
    return result;
  }

  /// Verify
  async verify(token: string) {
    var result = await Rest.Post({
      url: '/API/v1/Authentication/Verify',
      data: token,
    });
    return result;
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
    return await Rest.Get({ url: '/API/v1/Authentication/Logout' });
  }
}

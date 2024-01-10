import { Rest } from '../helpers';
import { State } from '../helpers/state';
import { LoginRequest, SignupRequest } from '../interfaces';
import { version } from '../version';

/// Authentication APIs
export class Authentication {
  /// Login
  async login(loginRequest: LoginRequest) {
    const result = await Rest.Post({
      url: `/API/${version}/Authentication/Login`,
      data: { ...{ username: null, email: null }, ...loginRequest },
    });
    return await State.processAuthenticationResult(result);
  }

  /// Signup
  async signup(signupRequest: SignupRequest) {
    const result = await Rest.Post({
      url: `/API/${version}/Authentication/Signup`,
      data: signupRequest,
    });
    return await State.processAuthenticationResult(result);
  }

  /// Load last session
  async loadSessionUsingJwt(jwt: string) {
    if (jwt) {
      State.jwt = jwt;
      const result = await Rest.Get({ url: `/API/${version}/Authentication/LoadSessionUsingJwt` }, jwt);
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
      const result = await Rest.Get({ url: `/API/${version}/Authentication/RefreshToken` }, jwt);
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
    const result = await Rest.Post({
      url: `/API/${version}/Authentication/ResetPassword`,
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
    const result = await Rest.Post({
      url: `/API/${version}/Authentication/ForgotPassword`,
      data: email,
    });
    return result;
  }

  /// Verify
  async verify(token: string) {
    const result = await Rest.Post({
      url: `/API/${version}/Authentication/Verify`,
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
    return await Rest.Get({ url: `/API/${version}/Authentication/Logout` });
  }
}

import { Rest } from '../helpers';
import { State } from '../helpers/state';
import { LoginRequest, SignupRequest } from '../interfaces';
import { version } from '../constants';
import { Apiraiser } from './api';
/// Authentication APIs
export class Authentication {
  private _timer: any;
  async loadPreviousSessionUsingJwt() {
    State.loadSessionFromLocalStorage();
    const result = await Apiraiser.authentication.loadSessionUsingJwt(State.accessToken);
    if (!result.Success) {
      return await Apiraiser.authentication.refreshToken(State.accessToken, State.refreshToken);
    } else {
      return result;
    }
  }

  /// Resume last session
  async resumeLastSession() {
    const result = await Rest.Get({ url: `/API/${version}/Authentication/ResumeLastSession` });
    return await State.processAuthenticationResult(result);
  }

  /// Login
  async login(loginRequest: LoginRequest) {
    const result = await Rest.Post({
      url: `/API/${version}/Authentication/Login`,
      data: { ...{ username: null, email: null }, ...loginRequest },
    });
    return await State.processAuthenticationResult(result);
  }

  /// Start Refresh Token Timer
  async startRefreshTokenTimer() {
    this._timer = setInterval(async () => {
      State.loadSessionFromLocalStorage();
      await Apiraiser.authentication.refreshToken(State.accessToken, State.refreshToken);
    }, 300000);
  }

  /// Stop Refresh Token Timer
  stopRefreshTokenTimer() {
    clearInterval(this._timer);
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
  async loadSessionUsingJwt(accessToken?: null | string) {
    if (accessToken) {
      const result = await Rest.Get({ url: `/API/${version}/Authentication/LoadSessionUsingJwt` }, accessToken);
      return await State.processAuthenticationResult(result);
    } else {
      const result = await Rest.Get({ url: `/API/${version}/Authentication/LoadSessionUsingJwt` });
      return await State.processAuthenticationResult(result);
    }
  }

  /// Refresh token
  async refreshToken(accessToken?: string, refreshToken?: string) {
    let data = {};
    if (accessToken && refreshToken) {
      data = {
        AccessToken: accessToken,
        RefreshToken: refreshToken,
      };
    }
    const result = await Rest.Post({
      url: `/API/${version}/Authentication/RefreshToken`,
      data: { ...data },
    });
    return await State.processAuthenticationResult(result);
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
  isSignedIn() {
    return State.accessToken ? true : false;
  }

  /// Get current signed in user
  getCurrentUser() {
    return State.user;
  }

  /// Signout user by clearing session
  async signOut() {
    this.stopRefreshTokenTimer();
    State.clearSession();
    return await Rest.Get({ url: `/API/${version}/Authentication/Logout` });
  }
}

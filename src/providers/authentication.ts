import { Rest } from '../helpers';
import { State } from '../helpers/state';
import { LoginRequest, SignupRequest } from '../interfaces';
import { version, apiraiser, provider } from '../constants';
import { Apiraiser } from '../api/api';

/// Authentication Provider APIs
export class AuthenticationProvider {
  private _timer: any;
  async loadPreviousSessionUsingJwt() {
    State.loadSessionFromLocalStorage();
    const result = await Apiraiser.provider.authentication.loadSessionUsingJwt(State.accessToken);
    if (!result.Success) {
      return await Apiraiser.provider.authentication.refreshToken(State.accessToken, State.refreshToken);
    } else {
      return result;
    }
  }

  /// Resume last session
  async resumeLastSession() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Authentication/ResumeLastSession` });
    return await State.processAuthenticationResult(result);
  }

  /// Login
  async login(loginRequest: LoginRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Authentication/Login`,
      data: { ...{ username: null, email: null }, ...loginRequest },
    });
    return await State.processAuthenticationResult(result);
  }

  /// Start Refresh Token Timer
  async startRefreshTokenTimer() {
    this._timer = setInterval(async () => {
      State.loadSessionFromLocalStorage();
      await Apiraiser.provider.authentication.refreshToken(State.accessToken, State.refreshToken);
    }, 300000);
  }

  /// Stop Refresh Token Timer
  stopRefreshTokenTimer() {
    clearInterval(this._timer);
  }

  /// Signup
  async signup(signupRequest: SignupRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Authentication/Signup`,
      data: signupRequest,
    });
    return await State.processAuthenticationResult(result);
  }

  /// Load last session
  async loadSessionUsingJwt(accessToken?: null | string) {
    if (accessToken) {
      const result = await Rest.Get(
        { url: `/${apiraiser}/${version}/${provider}/Authentication/LoadSessionUsingJwt` },
        accessToken,
      );
      return await State.processAuthenticationResult(result);
    } else {
      const result = await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Authentication/LoadSessionUsingJwt` });
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
      url: `/${apiraiser}/${version}/${provider}/Authentication/RefreshToken`,
      data: { ...data },
    });
    return await State.processAuthenticationResult(result);
  }

  /// Reset Password
  async resetPassword(token: string, password: string, confirmPassword: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Authentication/ResetPassword`,
      data: {
        Token: token,
        Password: password,
        ConfirmPassword: confirmPassword,
      },
    });
    return result;
  }

  /// Reset Email
  async resetEmail(token: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Authentication/ResetEmail`,
      data: {
        token: token,
      },
    });
    return result;
  }

  /// Forgot Password
  async forgotPassword(email: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Authentication/ForgotPassword`,
      data: email,
    });
    return result;
  }

  /// Change Password
  async changeEmail(email: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Authentication/ChangeEmail`,
      data: email,
    });
    return result;
  }

  /// Verify
  async verify(token: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Authentication/Verify`,
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
    return await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Authentication/Logout` });
  }

  async getUserProfile() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Authentication/GetUserProfile` });
    return result;
  }

  async getPlugins() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Authentication/GetPlugins`,
    });
    return result;
  }

  // Get Settings
  async getSettings() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Authentication/Settings`,
    });
    return result;
  }
}

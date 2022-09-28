import axios from 'axios';
import { State } from '../helpers/state';
import { APIResult, LoginRequest, SignupRequest } from '../models';

/// Authentication APIs
export class Authentication {
  /// Login
  async login(loginRequest: LoginRequest) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/Authentication/Login`,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(loginRequest.toJsonObject),
    });
    return await State.processAuthenticationResult(result.data);
  }

  /// Signup
  async signup(signupRequest: SignupRequest) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/Authentication/Signup`,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(signupRequest.toJsonObject),
    });
    return await State.processAuthenticationResult(result.data);
  }

  /// Load last session
  async loadLastSession() {
    let jwt: string = await State.loadJwt();
    if (jwt) {
      const result = await axios({
        method: 'get',
        url: `${State.endPoint}/API/Authentication/AuthLogin`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      return State.processAuthenticationResult(result.data);
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

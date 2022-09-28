import { State } from "../helpers/state";
import { APIResult, LoginRequest, SignupRequest } from "../models";

/// Authentication APIs
export class Authentication {
  
  /// Login
  async login(loginRequest: LoginRequest) {
    // var res = await http.post(
    //   Uri.parse('${State.endPoint}/API/Authentication/Login'),
    //   headers: {"Content-Type": "application/json"},
    //   body: jsonEncode(loginData),
    // );
    // return await State.processAuthenticationResult(
    //     APIResult.fromJson(json.decode(res.body)));
  
  }

  /// Signup
  async signup(signupRequest: SignupRequest) {
    // var res = await http.post(
    //   Uri.parse('${State.endPoint}/API/Authentication/Signup'),
    //   headers: {"Content-Type": "application/json"},
    //   body: jsonEncode(signupData),
    // );
    // return await State.processAuthenticationResult(
    //     APIResult.fromJson(json.decode(res.body)));
  }

  /// Load last session
  async loadLastSession() {
    // let jwt: string = await State.loadJwt();
    // if (jwt?.isNotEmpty ?? false) {
    //   var res = await http.get(
    //     Uri.parse('${State.endPoint}/API/Authentication/AuthLogin'),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": "Bearer $jwt",
    //     },
    //   );
    //   return await State.processAuthenticationResult(
    //       APIResult.fromJson(json.decode(res.body)));
    // } else {
    //   return APIResult(success: false, message: "No previous session found!");
    // }
  }

  /// Whether the user is signed in
  async isSignedIn() {
    return State.jwt? true: false;
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

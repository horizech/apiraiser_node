import { Rest } from '../helpers';
import { version, apiraiser } from '../constants';
import {
  OAuth2AuthenticationRequest,
  ClientRequest,
  OAuth2AuthorizationRequest,
  OAuth2TokenRequest,
} from '../interfaces';

/// OAuth2 APIs
export class OAuth2 {
  /// Refresh token
  async getUserScopes(scopes: string) {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/OAuth2/GetUserScopes?scopes=${scopes}` });
    return result;
  }
  /// Logout
  async logout() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/OAuth2/Logout` });
    return result;
  }
  /// Refresh token
  async refreshToken(refreshToken: string) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/OAuth2/RefreshToken`, data: refreshToken });
    return result;
  }
  /// Authorize
  async authorize(request: OAuth2AuthorizationRequest) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/OAuth2/Authorize?client_id=${request.ClientId}&redirect_uri=${request.RedirectUri}&scope=${request.Scope}&response_type=${request.ResponseType}&state=${request.State}&access_type=${request.AccessType}`,
    });
    return result;
  }
  /// Login
  async login(request: OAuth2AuthorizationRequest) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/OAuth2/Login?client_id=${request.ClientId}&redirect_uri=${request.RedirectUri}&scope=${request.Scope}&response_type=${request.ResponseType}&state=${request.State}&access_type=${request.AccessType}`,
    });
    return result;
  }
  /// Signup
  async signup(request: OAuth2AuthorizationRequest) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/OAuth2/Signup?client_id=${request.ClientId}&redirect_uri=${request.RedirectUri}&scope=${request.Scope}&response_type=${request.ResponseType}&state=${request.State}&access_type=${request.AccessType}`,
    });
    return result;
  }
  /// Consent
  async consent(request: OAuth2AuthenticationRequest) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/OAuth2/Consent?client_id=${request.ClientId}&redirect_uri=${request.RedirectUri}&scope=${request.Scope}&response_type=${request.ResponseType}&state=${request.State}&access_type=${request.AccessType}&request_token=${request.RequestToken}`,
    });
    return result;
  }
  /// Authenticate
  async authenticate(request: OAuth2AuthenticationRequest) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/OAuth2/Authenticate?client_id=${request.ClientId}&redirect_uri=${request.RedirectUri}&scope=${request.Scope}&response_type=${request.ResponseType}&state=${request.State}&access_type=${request.AccessType}&request_token=${request.RequestToken}`,
    });
    return result;
  }

  /// Token
  async token(request: OAuth2TokenRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/OAuth2/Token`,
      data: request,
    });
    return result;
  }

  /// Get UserInfo
  async getUserInfo() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/OAuth2/UserInfo`,
    });
    return result;
  }

  /// Get Client
  async getClient(clientId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/OAuth2/Client?client_id=${clientId}`,
    });
    return result;
  }

  /// Add Client
  async AddClient(request: ClientRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/OAuth2/Client`,
      data: request,
    });
    return result;
  }

  /// Update Client
  async updateClient(clientId: string, request: ClientRequest) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/OAuth2/Client?client_id=${clientId}`,
      data: request,
    });
    return result;
  }

  /// Delete Client
  async deleteClient(clientId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/OAuth2/Client?client_id=${clientId}`,
    });
    return result;
  }
}

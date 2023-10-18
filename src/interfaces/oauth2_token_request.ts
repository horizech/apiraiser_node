export interface OAuth2TokenRequest {
  clientID: string;
  clientSecret: string;
  grant_type: string;
  redirect_uri: string;
  code: string;
  server?: null | string;
  state?: null | string;
  tokenEndpoint?: null | string;
}

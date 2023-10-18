export interface OAuth2AuthenticationRequest {
  ClientId: string;
  RedirectUri: string;
  Scope: string;
  ResponseType: string;
  State?: null | string;
  AccessType?: null | string;
  RequestToken?: null | string;
}

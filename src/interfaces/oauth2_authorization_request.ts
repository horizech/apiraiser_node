export interface OAuth2AuthorizationRequest {
  ClientId: string;
  RedirectUri: string;
  Scope: string;
  ResponseType: string;
  State?: null | string;
  AccessType?: null | string;
}

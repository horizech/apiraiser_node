/// User model
export interface User {
  Id?: null | string;
  Username: string;
  Fullname: string;
  Email: string;
  Password?: null | string;
  AccessToken?: null | string;
  RefreshToken?: null | string;
  Roles?: null | any[];
  RoleIds?: null | string[];
  RoleNames?: null | string[];
  Address?: null | string;
  EmailVerified?: null | boolean;
  Phone?: null | string;
}

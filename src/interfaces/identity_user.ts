export interface IdentityUser {
  Username: string;
  Id?: string | null;
  Fullname: string;
  Email: string;
  Password?: string | '';
  Address?: string | '';
  EmailVerified: boolean;
  RoleIds: string[];
}

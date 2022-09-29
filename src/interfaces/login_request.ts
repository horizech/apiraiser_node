/// Model used for making login request
export interface LoginRequest {
  username?: null | string;
  email?: null | string;
  password: string;

  // get toJsonObject() {
  //   return {
  //     Username: this.username,
  //     Email: this.email,
  //     Password: this.password,
  //   };
  // }
}

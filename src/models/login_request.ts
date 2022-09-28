/// Model used for making login request
export class LoginRequest {
  username?: null | string = null;
  email?: null | string = null;
  password: string = '';

  // get toJsonObject() {
  //   return {
  //     Username: this.username,
  //     Email: this.email,
  //     Password: this.password,
  //   };
  // }
}

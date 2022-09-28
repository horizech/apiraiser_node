/// Model used for making Signup request
export class SignupRequest {
  username: string = '';
  email: string = '';
  fullname: string = '';
  password: string = '';

  toJsonObject() {
    return {
      Username: this.username,
      Fullname: this.fullname,
      Email: this.email,
      Password: this.password,
    };
  }
}

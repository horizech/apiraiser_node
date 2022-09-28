/// Model used for making initialize Apiraiser request
export class InitializeRequest {
  username: string = '';
  email: string = '';
  password: string = '';
  template: null | string = null;

  toJsonObject() {
    return {
      Username: this.username,
      Email: this.email,
      Password: this.password,
      Template: this.template,
    };
  }
}

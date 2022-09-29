/// Model used for making initialize Apiraiser request
export interface InitializeRequest {
  username: string;
  email: string;
  password: string;
  template: null | string;
  
  // toJsonObject() {
  //   return {
  //     Username: this.username,
  //     Email: this.email,
  //     Password: this.password,
  //     Template: this.template,
  //   };
  // }
}
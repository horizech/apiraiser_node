/// User model
export interface User {
  Id?: null | number;
  Username: string;
  Fullname: string;
  Email: string;
  Password?: null | string;
  Token?: null | string;
  Roles?: null | any[];
  RoleIds?: null | number[];
  RoleNames?: null | string[];

  // /// Get model from Json
  // factory User.fromJson(Map<string, dynamic> json) {
  //   try {
  //     User user = User(
  //         id: json['Id'] as int?,
  //         username: json['Username'] as string,
  //         fullname: json['Fullname'] != null ? json['Fullname'] as string : "",
  //         email: json['Email'] as string,
  //         password:
  //             json['Password'] != null ? json['Password'] as string : null,
  //         token: json['Token'] as string,
  //         roles: (json['Roles'] as List<dynamic>),
  //         roleIds: (json['Roles'] as List<dynamic>)
  //             .map((x) => (x as Map<string, dynamic>)["Id"] as int)
  //             .toList(),
  //         roleNames: (json['Roles'] as List<dynamic>)
  //             .map((x) => (x as Map<string, dynamic>)["Name"] as string)
  //             .toList());
  //     return user;
  //   } catch (e) {
  //     rethrow;
  //   }
  // }

  // toJsonObject() {
  //   return {
  //     Id: this.id,
  //     Username: this.username,
  //     Fullname: this.fullname,
  //     Email: this.email,
  //     Password: this.password,
  //     Token: this.token,
  //     Role: this.roles,
  //     RoleIds: this.roleIds,
  //     RoleNames: this.roleNames,
  //   };
  // }
}

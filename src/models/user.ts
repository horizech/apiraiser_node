/// User model
export class User {
  id?: null | number;
  username: string = "";
  fullname: string = "";
  email: string = "";
  password?: null | string;
  token?: null | string;
  roles?: null | any[];
  roleIds?: null | number[];
  roleNames?: null | string[];

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

  // /// Get Json from model
  // Map<string, dynamic> toJson(User instance) => <string, dynamic>{
  //       'Id': instance.id,
  //       'Username': instance.username,
  //       'Fullname': instance.fullname,
  //       'Email': instance.email,
  //       'Password': instance.password,
  //       'Token': instance.token,
  //       'Role': instance.roles,
  //       'RoleIds': instance.roleIds,
  //       'RoleNames': instance.roleNames,
  //     };
}

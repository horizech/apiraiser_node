import 'package:apiraiser/src/api/functions.dart';
import 'package:apiraiser/src/api/initalization.dart';
import 'package:apiraiser/src/api/miscellaneous.dart';
import 'package:apiraiser/src/api/table.dart';
import 'package:apiraiser/src/helpers/state.dart';
import 'package:apiraiser/src/api/column.dart';
import 'package:apiraiser/src/api/data.dart';
import 'package:apiraiser/src/api/authentication.dart';
import 'package:apiraiser/src/api/users.dart';
import { Authentication } from './authentication';
import { State } from '../helpers/state';

/// Apiraiser class
export class Apiraiser {
  /// Authentication APIs
  static authentication: Authentication;
  
  // /// Column APIs
  // static Column column = Column();

  // /// Data APIs
  // static Data data = Data();

  // /// Function APIs
  // static Functions function = Functions();

  // /// Initialization APIs
  // static Initialization initialization = Initialization();

  // /// Miscellaneous APIs
  // static Miscellaneous miscellaneous = Miscellaneous();

  // /// Table APIs
  // static Table table = Table();

  // /// Users APIs
  // static Users users = Users();

  /// Token Validation
  static validateAuthentication() {
    // if (token == null || token!.isEmpty) {
    //   throw ("Unauthorized!");
    // }
  }

  /// Initialize the library with provided [endpoint]
  ///
  /// Loads and performs Authentication using jwt if exists
  static async init(endpoint: string)  {
    State.endPoint = endpoint;
    await Apiraiser.authentication.loadLastSession();
  }
}

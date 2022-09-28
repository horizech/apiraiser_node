import { Authentication } from './authentication';
import { State } from '../helpers/state';
import { Column } from './column';
import { Data } from './data';
import { Functions } from './functions';
import { Initialization } from './initalization';
import { Miscellaneous } from './miscellaneous';
import { Table } from './table';
import { Users } from './users';

/// Apiraiser class
export class Apiraiser {
  /// Authentication APIs
  static authentication: Authentication;

  // /// Column APIs
  static column: Column;

  /// Data APIs
  static data: Data;

  /// Function APIs
  static function: Functions;

  /// Initialization APIs
  static Initialization: Initialization;

  /// Miscellaneous APIs
  static miscellaneous: Miscellaneous;

  /// Table APIs
  static table: Table;

  /// Users APIs
  static users: Users;

  /// Token Validation
  static validateAuthentication() {
    // if (token == null || token!.isEmpty) {
    //   throw ("Unauthorized!");
    // }
  }

  /// Initialize the library with provided [endpoint]
  ///
  /// Loads and performs Authentication using jwt if exists
  static async init(endpoint: string) {
    State.endPoint = endpoint;
    await Apiraiser.authentication.loadLastSession();
  }
}

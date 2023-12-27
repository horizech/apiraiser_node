import { Authentication } from './authentication';
import { State } from '../helpers/state';
import { Column } from './column';
import { Data } from './data';
import { Functions } from './functions';
import { Initialization } from './initalization';
import { Miscellaneous } from './miscellaneous';
import { Table } from './table';
import { Users } from './users';
import { Media } from './media';
import { ImportExport } from './importexport';
import { OAuth2 } from './oauth2';
import { Feature } from './feature';
import { Encryption } from './encryption';
import { Storage } from './storage';
import { Commerce } from './commerce';
import { Archive } from './archive';
import { AWSS3 } from './awss3';

/// Apiraiser class
export class Apiraiser {
  /// Authentication APIs
  static authentication: Authentication = new Authentication();

  // /// Column APIs
  static column: Column = new Column();

  /// Data APIs
  static data: Data = new Data();

  /// Function APIs
  static function: Functions = new Functions();

  /// Initialization APIs
  static initialization: Initialization = new Initialization();

  /// Media APIs
  static media: Media = new Media();

  /// Storage APIs
  static storage: Storage = new Storage();

  /// Miscellaneous APIs
  static miscellaneous: Miscellaneous = new Miscellaneous();

  /// Table APIs
  static table: Table = new Table();

  /// Users APIs
  static users: Users = new Users();

  /// OAuth2 APIs
  static oauth2: OAuth2 = new OAuth2();

  /// Feature APIs
  static feature: Feature = new Feature();

  /// Encryption APIs
  static encryption: Encryption = new Encryption();

  /// Import Export APIs
  static importExport: ImportExport = new ImportExport();

  /// Commerce APIs
  static commerce: Commerce = new Commerce();

  /// Archive APIs
  static archive: Archive = new Archive();

  /// AWSS3 APIs
  static awss3: AWSS3 = new AWSS3();

  /// Token Validation
  static validateAuthentication() {
    // if (token == null || token!.isEmpty) {
    //   throw ("Unauthorized!");
    // }
  }

  /// Initialize the library with provided [endpoint]
  ///
  /// Loads and performs Authentication using jwt if provided
  static async init(endpoint: string, jwt?: string) {
    State.endPoint = endpoint;
    if (jwt) {
      return await Apiraiser.authentication.loadSessionUsingJwt(jwt);
    } else {
      return true;
    }
  }
}

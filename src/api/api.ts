import { Authentication } from './authentication';
import { State } from '../helpers/state';
import { Functions } from './functions';
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
import { SMTP } from './smtp';
import { Apiraiser as ApiraiserClass } from './apiraiser';
import setupAxiosInterceptors from '../helpers/interceptors';
import { Policy } from './policy';
import { Records } from './records';
import { CollectionsStudio } from './collections_studio';
import { Internationalization } from './internationalization';
import { ContentStudio } from './contentStudio';
import { Identity } from './identity';
import { WebSockets } from './webSockets';
import { Database } from './database';
import { ApplicationsStudio } from './applications_studio';
import { API } from './apiraiser_Api';

/// Apiraiser class
export class Apiraiser {
  /// Authentication APIs
  static authentication: Authentication = new Authentication();

  /// Function APIs
  static function: Functions = new Functions();

  /// Apiraiser APIs
  static apiraiser: ApiraiserClass = new ApiraiserClass();

  /// Media APIs
  static media: Media = new Media();

  /// Storage APIs
  static storage: Storage = new Storage();

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

  /// SMTP APIs
  static smtp: SMTP = new SMTP();

  /// Policy APIs
  static policy: Policy = new Policy();

  /// Records APIs
  static records: Records = new Records();

  /// CollectionsStudio APIs
  static collectionsStudio: CollectionsStudio = new CollectionsStudio();

  /// Content Studio APIs
  static contentStudio: ContentStudio = new ContentStudio();

  /// Internationalization APIs
  static internationalization: Internationalization = new Internationalization();

  /// Identity APIs
  static identity: Identity = new Identity();

  /// WebSockets APIs
  static webSockets: WebSockets = new WebSockets();

  /// Database APIs
  static database: Database = new Database();

  /// Applications Studio APIs
  static applicationsStudio: ApplicationsStudio = new ApplicationsStudio();

  // API APIs
  static api: API = new API();

  /// Initialize the library with provided [endpoint]
  ///
  /// Loads and performs Authentication using jwt if provided
  static init(endpoint: string, websocketEndpoint: string, onUnauthenticated: any) {
    if (!endpoint) {
      return false;
    }

    State.endPoint = endpoint.endsWith('/') ? endpoint.slice(0, -1) : endpoint;
    State.webSocketEndpoint = websocketEndpoint ?? State.endPoint.replace('https', 'wss').replace('http', 'ws') + '/ws';

    setupAxiosInterceptors(onUnauthenticated);

    if (State.webSocketEndpoint) {
      Apiraiser.webSockets.init();
    }
    return true;
  }
}

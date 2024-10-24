import { Authentication } from './authentication';
import { State } from '../helpers/state';
import { Functions } from './functions';
import { Users } from './users';
import { Media } from './media';
import { ImportExport } from './importexport';
import { OAuth2 } from './oauth2';
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
  // Plugin APIs
  static plugin = {
    /// Archive APIs
    archive: new Archive(),

    /// Authentication APIs
    authentication: new Authentication(),

    /// Commerce APIs
    commerce: new Commerce(),

    /// AWSS3 APIs
    awss3: new AWSS3(),

    /// Function APIs
    function: new Functions(),

    /// Encryption APIs
    encryption: new Encryption(),

    /// Import Export APIs
    importExport: new ImportExport(),

    /// SMTP APIs
    smtp: new SMTP(),
  };

  // App APIs
  static app = {
    /// ApplicationsStudio APIs
    applicationsStudio: new ApplicationsStudio(),

    /// CollectionsStudio APIs
    collectionsStudio: new CollectionsStudio(),

    /// ContentStudio APIs
    contentStudio: new ContentStudio(),

    /// Identity APIs
    identity: new Identity(),

    /// Records APIs
    records: new Records(),

    /// Internationalization APIs
    internationalization: new Internationalization(),
  };

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

  /// Policy APIs
  static policy: Policy = new Policy();

  /// WebSockets APIs
  static webSockets: WebSockets = new WebSockets();

  /// Database APIs
  static database: Database = new Database();

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

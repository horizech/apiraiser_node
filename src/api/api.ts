import { Authentication } from './authentication';
import { State } from '../helpers/state';
import { Functions } from './functions';
import { MediaApp } from './media_app';
import { ImportExport } from './importexport';
import { OAuth2 } from './oauth2';
import { Encryption } from './encryption';
import { StorageProvider } from './storage_provider';
import { Commerce } from './commerce';
import { Archive } from './archive';
import { S3 } from './s3';
import { SMTP } from './smtp';
import { Apiraiser as ApiraiserClass } from './apiraiser';
import setupAxiosInterceptors from '../helpers/interceptors';
import { PolicyEditor } from './policy';
import { Records } from './records';
import { CollectionsStudio } from './collections_studio';
import { Internationalization } from './internationalization';
import { ContentStudio } from './contentStudio';
import { Identity } from './identity';
import { WebSockets } from './webSockets';
import { Database } from './database';
import { ApplicationsStudio } from './applications_studio';
import { API } from './apiraiser_api';
import { MediaProvider } from './media_provider';
import { Email } from './email';

/// Apiraiser class
export class Apiraiser {
  // Plugin APIs
  static plugin = {
    /// Authentication APIs
    authentication: new Authentication(),

    /// Commerce APIs
    commerce: new Commerce(),

    /// Encryption APIs
    encryption: new Encryption(),

    /// SMTP APIs
    smtp: new SMTP(),
  };

  static provider = {
    /// S3 APIs
    s3: new S3(),

    /// Storage APIs
    storage: new StorageProvider(),

    /// Media APIs
    media: new MediaProvider(),

    /// Database APIs
    database: new Database(),

    /// Email APIs
    email: new Email(),

    /// Archive APIs
    archive: new Archive(),
  };

  // App APIs
  static app = {
    /// Function APIs
    function: new Functions(),

    /// ApplicationsStudio APIs
    applicationsStudio: new ApplicationsStudio(),

    /// Import Export APIs
    importExport: new ImportExport(),

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

    /// Policy Editor APIs
    policyEditor: new PolicyEditor(),

    /// Media APIs
    media: new MediaApp(),
  };

  /// Apiraiser APIs
  static apiraiser: ApiraiserClass = new ApiraiserClass();

  /// OAuth2 APIs
  static oauth2: OAuth2 = new OAuth2();

  /// WebSockets APIs
  static webSockets: WebSockets = new WebSockets();

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

import { AuthenticationProvider } from '../providers/authentication';
import { State } from '../helpers/state';
import { FunctionApp } from './functions';
import { MediaApp } from './media_app';
import { ImportExportApp } from './importexport';
import { OAuth2 } from '../api/oauth2';
import { EncryptionProvider } from '../providers/encryption';
import { StorageProvider } from '../providers/storage';
import { CommercePlugin } from '../plugins/commerce';
import { ArchiveProvider } from '../providers/archive';
import { S3Provider } from '../providers/s3';
import { SMTPEmailPlugin } from '../plugins/smtp';
import { Apiraiser as ApiraiserClass } from '../api/apiraiser';
import setupAxiosInterceptors from '../helpers/interceptors';
import { PolicyEditorPlugin } from '../plugins/policy_editor';
import { CollectionsStudioApp } from './collections_studio';
import { InternationalizationProvider } from '../providers/internationalization';
import { ContentStudioApp } from './contentStudio';
import { IdentityPlugin } from '../plugins/identity';
import { WebSockets } from '../api/webSockets';
import { DatabaseProvider } from '../providers/database';
import { ApplicationsStudioApp } from './applications_studio';
import { API } from '../api/apiraiser_api';
import { MediaProvider } from '../providers/media';
import { EmailProvider } from '../providers/email';
import { OAuthLinkPlugin } from '../plugins/oauthLink';
import { ZipArchivePlugin } from '../plugins/zip';
import { NotesApp } from './notes';
import { TasksApp } from './tasks';
import { RecordsApp } from './records';

/// Apiraiser class
export class Apiraiser {
  // Plugin APIs
  static plugin = {
    /// Zip APIs
    zip: new ZipArchivePlugin(),

    /// Commerce APIs
    commerce: new CommercePlugin(),

    /// OAuth Link APIs
    oauthLink: new OAuthLinkPlugin(),

    /// SMTP APIs
    smtp: new SMTPEmailPlugin(),

    /// Identity APIs
    identity: new IdentityPlugin(),

    /// Policy Editor APIs
    policyEditor: new PolicyEditorPlugin(),
  };

  static provider = {
    /// Authentication APIs
    authentication: new AuthenticationProvider(),

    /// S3 APIs
    s3: new S3Provider(),

    /// Storage APIs
    storage: new StorageProvider(),

    /// Encryption APIs
    encryption: new EncryptionProvider(),

    /// Media APIs
    media: new MediaProvider(),

    /// Database APIs
    database: new DatabaseProvider(),

    /// Email APIs
    email: new EmailProvider(),

    /// Archive APIs
    archive: new ArchiveProvider(),

    /// Internationalization APIs
    internationalization: new InternationalizationProvider(),
  };

  // App APIs
  static app = {
    /// Function APIs
    function: new FunctionApp(),

    /// ApplicationsStudio APIs
    applicationsStudio: new ApplicationsStudioApp(),

    /// Import Export APIs
    importExport: new ImportExportApp(),

    /// CollectionsStudio APIs
    collectionsStudio: new CollectionsStudioApp(),

    /// ContentStudio APIs
    contentStudio: new ContentStudioApp(),

    /// Records APIs
    records: new RecordsApp(),

    /// Media APIs
    media: new MediaApp(),

    /// Notes APIs
    notes: new NotesApp(),

    /// Tasks APIs
    tasks: new TasksApp(),
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

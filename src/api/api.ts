import { AuthenticationProvider } from '../providers/authentication';
import { State } from '../helpers/state';
import { FunctionApp } from '../apps/functions';
import { MediaLibraryApp } from '../apps/media_library';
import { ImportExportPlugin } from '../plugins/importexport';
import { OAuth2 } from './oauth2';
import { EncryptionProvider } from '../providers/encryption';
import { StorageProvider } from '../providers/storage';
import { CommercePlugin } from '../plugins/commerce';
import { ArchiveProvider } from '../providers/archive';
import { S3Provider } from '../providers/s3';
import { SMTPEmailPlugin } from '../plugins/smtp';
import { Apiraiser as ApiraiserClass } from './apiraiser';
import setupAxiosInterceptors from '../helpers/interceptors';
import { AccessManagerPlugin } from '../plugins/access_manager';
import { CollectionsStudioApp } from '../apps/collections_studio';
import { InternationalizationProvider } from '../providers/internationalization';
import { ContentStudioApp } from '../apps/content_studio';
import { IdentityPlugin } from '../plugins/identity';
import { WebSockets } from './webSockets';
import { DatabaseProvider } from '../providers/database';
import { ApplicationsStudioApp } from '../apps/applications_studio';
import { RestAPIPlugin } from '../plugins/rest_api';
import { MediaProvider } from '../providers/media';
import { EmailProvider } from '../providers/email';
import { OAuthLinkPlugin } from '../plugins/oauthLink';
import { ZipArchivePlugin } from '../plugins/zip';
import { NotesApp } from '../apps/notes';
import { TasksApp } from '../apps/tasks';
import { RecordsApp } from '../apps/records';
import { I18nPlugin } from '../plugins/i18n';
import { ProfilePlugin } from '../plugins/profile';
import { SESEmailPlugin } from '../plugins/ses';
import { BrandWizardPlugin } from '../plugins/brand_wizard';
import { BrandingProvider } from '../providers/branding';
import { BackgroundJobsProvider } from '../providers/backgroundjobs';

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

    /// SES APIs
    ses: new SESEmailPlugin(),

    /// Identity APIs
    identity: new IdentityPlugin(),

    /// Access Manager APIs
    accessManager: new AccessManagerPlugin(),

    // Rest API APIs
    restAPI: new RestAPIPlugin(),

    /// Brand Wizard APIs
    brandWizard: new BrandWizardPlugin(),

    /// Import Export APIs
    importExport: new ImportExportPlugin(),

    /// Profile APIs
    profile: new ProfilePlugin(),
  };

  static provider = {
    /// Background Jobs
    backgroundJobsProvider: new BackgroundJobsProvider(),

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

    /// Branding APIs
    branding: new BrandingProvider(),
  };

  // App APIs
  static app = {
    /// Function APIs
    function: new FunctionApp(),

    /// ApplicationsStudio APIs
    applicationsStudio: new ApplicationsStudioApp(),

    /// CollectionsStudio APIs
    collectionsStudio: new CollectionsStudioApp(),

    /// ContentStudio APIs
    contentStudio: new ContentStudioApp(),

    /// Records APIs
    records: new RecordsApp(),

    /// Media Library APIs
    mediaLibrary: new MediaLibraryApp(),

    /// Notes APIs
    notes: new NotesApp(),

    /// Tasks APIs
    tasks: new TasksApp(),

    /// i18n APIs
    i18n: new I18nPlugin(),
  };

  /// Apiraiser APIs
  static apiraiser: ApiraiserClass = new ApiraiserClass();

  /// OAuth2 APIs
  static oauth2: OAuth2 = new OAuth2();

  /// WebSockets APIs
  static webSockets: WebSockets = new WebSockets();

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

# Unreleased

# 4.0.0-rc.4

- Added SES Plugin APIs
- Added getFavicon API in Apiraiser class
- Added new APIs in OAuth2 Provider

# 4.0.0-rc.3

- Added Content studio APIs
- Added Settings APIs in OAuthLink Plugin
- Updated media app update function
- Added new profile APIs

# 4.0.0-rc.2

- Updated Initialize function for user authentication
- Added Profile APIs

## 4.0.0-rc.1

- Added plugins, apps and providers folders
- Updated Apiraiser class
- Added AppsStudio, Records, Media, CollectionsStudio, Functions, Tasks, Notes, ImportExports and ContentStudio app classes
- Added AccessManager, I18n, Identity, OAuthLink, SMTP, Zip, RestAPI plugins classes
- Added Archive, Authentication, Database, Email, Encryption, Internationalization, Media, S3, Storage provider classes
- Created Apiraiser Class and moved all initialize and miscellaneous APIs in this class
- Creadted policy class and added getData API in it.
- Migrated project to NodeNext
- Created resumeLastSession API in Authentication class
- Created index.js file in src folder
- Updated API version to v4
- Created Records class and added getData API in it
- Created deleteByIds function in data class
- Added multipart content-type option in import data function
- Added content type parameter in getHeaders function
- Added design class and getData API in it
- Updated create table using definition file function for multipart content type
- Added localization class and Added getData and getLocalization APIs in it

## 3.0.0

- Created final v3 release
- Compatable with Apiraiser v3.0.0.

## 3.0.0-rc.12

- Added UpdateByConditions API
- Added data in AxiosRequestConfig for rest delete method
- Compatable with Apiraiser v3.0.0-rc.12.

## 3.0.0-rc.7

- Added getCount API
- Compatable with Apiraiser v3.0.0-rc.7.

## 3.0.0-rc.5

- Added interceptors for unauthorized access
- Added onUnauthenticated function in init method, then passed to interceptors
- Added SaveSessionInLocalStorage function to save both access and refresh token in local storage
- Added loadSessionFromLocalStorage function to load both access and refresh token from local storage
- Added clearSessionFromLocalStorage function to clear local storage
- Added access and refresh tokens in state variable
- Added loadPreviousSession, startRefreshTokenTimer, stopRefreshTokenTimer method in authentication class
- Updated loadSessionUsingJwt, refreshToken, signOut, isSignedIn, getCurrentUser methods in authentication class
- Compatable with Apiraiser v3.0.0-rc.5.

## 3.0.0-rc.3

- Added sender name in SMTP

## 3.0.0-rc.2

- Added overwriteFiles(boolean), OutputPathPrefix(enum) in Archive APIs
- Added deleteSourceFolderAfterUpload(boolean) in AWSS3 UploadFolder API
- Added SMTP send email API

## 3.0.0-rc.1

- Compatable with Apiraiser v3.0.0.
- Updated Table, Column, Data APIs
- Added AWSS3 upload folder api

## 2.0.0

- Added Archive APIs
- Added AWSS3 APIs

## 1.0.0

- Added RefreshToken API.
- Added ResetPassword API.
- Added ForgotPassword API.
- Added Verify API.
- Added Update Media API.
- Added Download Media API.
- Added Upload Storage API.
- Added Update Storage API.
- Added Download Storage API.
- Added Delete Storage API.
- Added OAuth2 APIs.
- Added Feature APIs.
- Added Encryptrion APIs.
- Added Commerce APIs.

## 0.1.21

- Updated DownloadTableDefinitionFile API.

## 0.1.20

- Added Delete Media API.
- Added CreateTableUsingDefinitionFile API.
- Added DownloadTableDefinitionFile API.
- Added DeleteTable API.
- Updated ImportExcel API.
- Compatable with Apiraiser v1.0.0.

## 0.1.19

- Updated ImportExcel API.
- Compatable with Apiraiser v0.9.0.

## 0.1.18

- Added ImportExcel API.
- Compatable with Apiraiser v0.9.0.

## 0.1.17

- Added responseType in RestParams.
- Updated ExportExcel API to receive blob type.
- Compatable with Apiraiser v0.9.0.

## 0.1.16

- Added Export Excel support.
- Compatable with Apiraiser v0.9.0.

## 0.1.15

- Added Media support.
- Compatable with Apiraiser v0.9.0.

## 0.1.14

- Updated User Interface.
- Compatable with Apiraiser v0.8.2.

## 0.1.13

- Updated CreateTable API.
- Compatable with Apiraiser v0.8.0.

## 0.1.12

- Added getTemplatesList API.
- Compatable with Apiraiser v0.7.0.

## 0.1.11

- Added getTemplatesList API.
- Updated createTable API.
- Compatable with Apiraiser v0.7.0.

## 0.1.10

- Removed saving jwt in library.
- Compatable with Apiraiser v0.6.1.

## 0.1.9

- Made array types optional.
- Compatable with Apiraiser v0.6.1.

## 0.1.8

- Code cleanup.
- Compatable with Apiraiser v0.6.1.

## 0.1.7

- Added passing JWT manually to Rest API.
- Compatable with Apiraiser v0.6.1.

## 0.1.6

- Implemented Rest params interface.
- Bugfixes.
- Compatable with Apiraiser v0.6.1.

## 0.1.5

- Added JsonHelper.
- Bugfixes.
- Compatable with Apiraiser v0.6.1.

## 0.1.4

- Fixed localStorage switch for node.
- Compatable with Apiraiser v0.6.1.

## 0.1.3

- Use node-localstorage instead of store2.
- Compatable with Apiraiser v0.6.1.

## 0.1.2

- Changed models to interfaces.
- Added store2 library for Store.
- Compatable with Apiraiser v0.6.1.

## 0.1.1

- Changed tsconfig.
- Compatable with Apiraiser v0.6.1.

## 0.1.0

- First release.
- Compatable with Apiraiser v0.6.1.

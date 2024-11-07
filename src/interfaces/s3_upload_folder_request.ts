export interface S3UploadFolderRequest {
  Key: string;
  Folder: string;
  DeleteSourceFolderAfterUpload: boolean;
}

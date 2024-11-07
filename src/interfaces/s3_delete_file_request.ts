export interface S3DeleteFileRequest {
  AccessKeyId: string;
  SecretAccessKey: string;
  Region: object;
  Bucket: string;
  Key: string;
}

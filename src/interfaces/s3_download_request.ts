export interface S3DownloadRequest {
  AccessKeyId: string;
  SecretAccessKey: string;
  Region: object;
  Bucket: string;
  Key: string;
}

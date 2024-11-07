export interface S3UploadRequest {
  AccessKeyId: string;
  SecretAccessKey: string;
  Region: object;
  Bucket: string;
  Key: string;
  File?: File;
  Stream?: ReadableStream;
  ContentType?: string;
  Path: string;
}

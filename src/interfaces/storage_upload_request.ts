/// Model used for making login request
export interface StorageUploadRequest {
  StorageId: string;
  FileName?: null | string;
  FormFile?: null | any;
  FormFiles?: null | any[];
  Path?: null | string;
  StorageSource?: string;
}

/// Model used for making login request
export interface MediaUploadRequest {
  MediaId: number;
  FileName?: null | string;
  FormFile?: null | any;
  FormFiles?: null | any[];
  Path?: null | string;
  MediaSource: number;
}

/// Model used for making login request
export interface MediaUploadRequest {
  MediaId?: string;
  FileName?: null | string;
  Title?: null | string;
  Caption?: null | string;
  Description?: null | string;
  FormFile?: null | any;
  FormFiles?: null | any[];
  Path?: null | string;
  MediaSource?: string;
  MediaType?: string;
}

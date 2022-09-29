/// APIResult model
export interface APIResult {
  Success: boolean;
  Message?: null | string;
  Data?: any;
  ErrorCode?: null | string;
}

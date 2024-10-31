/// APIResult model
export interface APIResult {
  Success: boolean;
  Message?: null | string;
  Data?: any;
  ErrorCode?: null | string;
  SuccessCode?: null | string;
  AdditionalSuccessInformation?: null | string;
  AdditionalErrorInformation?: null | string;
  Meta?: null | any;
}

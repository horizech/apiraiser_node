/// APIResult model
export interface APIResult {
  success: boolean;
  message?: string;
  data?: any;
  errorCode?: string;
}

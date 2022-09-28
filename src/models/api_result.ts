/// APIResult model
export class APIResult {
  success: boolean = false;
  message?: string;
  data?: any;
  errorCode?: string;
}
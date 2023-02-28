import { ResponseType } from 'axios';
export interface RestParams {
  url: string;
  params?: null | any;
  data?: null | any;
  responseType?: ResponseType;
}

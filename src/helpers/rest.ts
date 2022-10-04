import axios from 'axios';
import { APIResult, RestParams } from '../interfaces';
import { Headers } from './headers';
import { State } from './state';

export class Rest {
  static async Get(restParams: RestParams, jwt: null | string = null) {
    try {
      const response = await axios.get(restParams.url, {
        baseURL: State.endPoint,
        headers: Headers.getHeaders(jwt),
        params: restParams.params,
      });
      return response.data;
    } catch (e: any) {
      const apiResult: APIResult = {
        Success: false,
        Message: e.toString(),
        Data: null,
        ErrorCode: null,
      };
      return apiResult;
    }
  }

  static async Post(restParams: RestParams, jwt: null | string = null) {
    try {
      const response = await axios.post(restParams.url, restParams.data, {
        baseURL: State.endPoint,
        headers: Headers.getHeaders(jwt),
        params: restParams.params,
      });
      return response.data;
    } catch (e: any) {
      const apiResult: APIResult = {
        Success: false,
        Message: e.toString(),
        Data: null,
        ErrorCode: null,
      };
      return apiResult;
    }
  }

  static async Put(restParams: RestParams, jwt: null | string = null) {
    try {
      const response = await axios.put(restParams.url, restParams.data, {
        baseURL: State.endPoint,
        headers: Headers.getHeaders(jwt),
        params: restParams.params,
      });
      return response.data;
    } catch (e: any) {
      const apiResult: APIResult = {
        Success: false,
        Message: e.toString(),
        Data: null,
        ErrorCode: null,
      };
      return apiResult;
    }
  }

  static async Delete(restParams: RestParams, jwt: null | string = null) {
    try {
      const response = await axios.delete(restParams.url, {
        baseURL: State.endPoint,
        headers: Headers.getHeaders(jwt),
        params: restParams.params,
        data: restParams.data,
      });
      return response.data;
    } catch (e: any) {
      const apiResult: APIResult = {
        Success: false,
        Message: e.toString(),
        Data: null,
        ErrorCode: null,
      };
      return apiResult;
    }
  }
}

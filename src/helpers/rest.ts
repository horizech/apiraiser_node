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
      return Rest.ProcessFailure(e);
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
      return Rest.ProcessFailure(e);
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
      return Rest.ProcessFailure(e);
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
      return Rest.ProcessFailure(e);
    }
  }

  static ProcessFailure(resp: any) {
    const response = resp.response || resp;
    const status: string = '' + (response.statusCode || response.status);
    const result: APIResult = {
      Success: false,
      Data: null,
      ErrorCode: response.statusCode || response.status,
      Message: null
    };

    if(status.includes('401')) {
      result.Message = "Unauthorized!";
    }
    else if(status.includes('403')) {
      result.Message = "Forbidden!";
    }
    else {
      result.Message = "Server error!";
    }
    
    return result;
  }
}

import axios from 'axios';
import { Headers, Rest, State } from '../helpers';

/// Function APIs
export class Functions {
  /// Execute Function by [id]

  async excuteFunction(id: number, jsonQuery: object) {
    const result = await Rest.Post({ url: `/API/function/Execute/${id}`, data: jsonQuery });
    return result;
  }
}

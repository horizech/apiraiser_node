import axios from 'axios';
import { Headers, State } from '../helpers';

/// Function APIs
export class Functions {
  /// Execute Function by [id]

  async excuteFunction(id: number, jsonQuery: object) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/function/Execute/${id}`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(jsonQuery),
    });
    return result;
  }
}

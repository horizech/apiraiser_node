import { Rest } from '../helpers';

/// Function APIs
export class Functions {
  /// Execute Function by [id]

  async excuteFunction(id: string, jsonQuery: object) {
    const result = await Rest.Post({ url: `/API/v1/function/Execute/${id}`, data: jsonQuery });
    return result;
  }
}

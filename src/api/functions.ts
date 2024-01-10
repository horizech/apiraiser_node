import { Rest } from '../helpers';
import { version } from '../version';

/// Function APIs
export class Functions {
  /// Execute Function by [id]

  async excuteFunction(id: string, jsonQuery: object) {
    const result = await Rest.Post({ url: `/API/${version}/function/Execute/${id}`, data: jsonQuery });
    return result;
  }
}

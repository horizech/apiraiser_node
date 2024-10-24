import { Rest } from '../helpers';
import { version, apiraiser, plugin } from '../constants';

/// Function APIs
export class Functions {
  /// Execute Function by [id]

  async excuteFunction(id: string, jsonQuery: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${plugin}/function/Execute/${id}`, data: jsonQuery });
    return result;
  }
}

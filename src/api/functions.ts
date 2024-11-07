import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Function APIs
export class Functions {
  /// Execute Function by [id]

  async excuteFunction(id: string, jsonQuery: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/function/Execute/${id}`, data: jsonQuery });
    return result;
  }
}

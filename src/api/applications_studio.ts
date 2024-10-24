import { Rest } from '../helpers';
import { version, apiraiser } from '../constants';

/// ApplicationsStudio APIs
export class ApplicationsStudio {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/ApplicationsStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Modify Application
  async modifyApplication(data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/ApplicationsStudio/ModifyApplication`,
      data: data,
    });
    return result;
  }
}

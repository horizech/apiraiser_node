import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// ApplicationsStudio App APIs
export class ApplicationsStudioApp {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/${app}/ApplicationsStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Modify Application
  async modifyApplication(data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}}/${app}/ApplicationsStudio/ModifyApplication`,
      data: data,
    });
    return result;
  }
}

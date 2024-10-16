import { Rest } from '../helpers';
import { version } from '../version';

/// ApplicationsStudio APIs
export class ApplicationsStudio {
  /// Get Data
  async getData() {
    const url = `/API/${version}/ApplicationsStudio/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Modify Application
  async modifyApplication(data: object) {
    const result = await Rest.Put({
      url: `/API/${version}/ApplicationsStudio/ModifyApplication`,
      data: data,
    });
    return result;
  }
}

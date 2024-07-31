import { Rest } from '../helpers';
import { version } from '../version';

/// Localization APIs
export class Localization {
  /// Get Data
  async getData() {
    const url = `/API/${version}/Localization/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Localization
  async getLocalization(locale: string) {
    const url = `/API/${version}/Localization/GetLocalizations`;
    const result = await Rest.Post({ url: url, data: locale });
    return result;
  }
}

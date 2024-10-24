import { Rest } from '../helpers';
import { version } from '../constants';

/// Internationalization APIs
export class Internationalization {
  /// Get Data
  async getData() {
    const url = `/API/${version}/Internationalization/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Translations
  async getTranslations(locale: string) {
    const url = `/API/${version}/Internationalization/GetTranslations`;
    const result = await Rest.Post({ url: url, data: locale });
    return result;
  }
}

import { Rest } from '../helpers';
import { version, apiraiser, plugin } from '../constants';
import { AddUpdateTranslationsRequest as AddUpdateTranslationsRequest } from '../interfaces/add_update_translations';
import { DeleteTranslationsRequest } from '../interfaces/delete_translations_request';

/// i18n APIs
export class i18nPlugin {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/${plugin}/i18n/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Translations
  async getTranslationsByLocale(locale: string) {
    const url = `/${apiraiser}/${version}/${plugin}/i18n/GetTranslationsByLocale`;
    const result = await Rest.Post({ url: url, data: locale });
    return result;
  }
  // Get Translations
  async getTrasnlations(pageSize: number, page: number, filtertext?: string) {
    let url = `/${apiraiser}/${version}/${plugin}/i18n/Translations?pageSize=${pageSize}&page=${page}`;
    if (filtertext) url += `&filtertext=${encodeURIComponent(filtertext)}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert I18n
  async insertI18n(label: string) {
    const url = `/${apiraiser}/${version}/${plugin}/i18n/I18n`;
    const result = await Rest.Post({ url: url, data: { Label: label } });
    return result;
  }
  /// Add Update Translations
  async addUpdateTranslations(request: AddUpdateTranslationsRequest) {
    const url = `/${apiraiser}/${version}/${plugin}/i18n/Translations`;
    const result = await Rest.Post({ url: url, data: request });
    return result;
  }
  /// Delete Translations
  async deleteTranslation(deleteTranslationsRequest: DeleteTranslationsRequest) {
    const url = `/${apiraiser}/${version}/${plugin}/i18n/Translations`;
    const result = await Rest.Delete({ url: url, data: deleteTranslationsRequest });
    return result;
  }

  /// Insert a new locale
  async insertLocale(data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${plugin}/i18n/Locale`, data });
    return result;
  }

  /// Update locale
  async updateLocale(id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/${plugin}/i18n/Locale/${id}`, data });
    return result;
  }

  /// Delete a locale
  async deleteLocale(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${plugin}/i18n/Locale/${id}` });
    return result;
  }

  /// Insert a currency
  async insertCurrency(data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${plugin}/i18n/Currency`, data });
    return result;
  }

  /// Update currency
  async updateCurrency(id: string, data: object) {
    const result = await Rest.Put({ url: `/${apiraiser}/${version}/${plugin}/i18n/Currency/${id}`, data });
    return result;
  }

  /// Delete a currency
  async deleteCurrency(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${plugin}/i18n/Currency/${id}` });
    return result;
  }
}

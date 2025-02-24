import { Rest } from '../helpers';
import { version, apiraiser, provider } from '../constants';
import { AddUpdateTranslationsRequest as AddUpdateTranslationsRequest } from '../interfaces/add_update_translations';
import { DeleteTranslationsRequest } from '../interfaces/delete_translations_request';

/// Internationalization APIs
export class InternationalizationProvider {
  /// Get Data
  async getData() {
    const url = `/${apiraiser}/${version}/${provider}/Internationalization/GetData`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Translations
  async getTranslationsByLocale(locale: string) {
    const url = `/${apiraiser}/${version}/${provider}/Internationalization/GetTranslationsByLocale`;
    const result = await Rest.Post({ url, data: locale });
    return result;
  }
  // Get Translations
  async getTrasnlations(pageSize: number, page: number, filtertext?: string) {
    let url = `/${apiraiser}/${version}/${provider}/Internationalization/Translations?pageSize=${pageSize}&page=${page}`;
    if (filtertext) url += `&filtertext=${encodeURIComponent(filtertext)}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert I18n
  async insertI18n(label: string) {
    const url = `/${apiraiser}/${version}/${provider}/Internationalization/I18n`;
    const result = await Rest.Post({ url, data: { Label: label } });
    return result;
  }
  /// Add Update Translations
  async addUpdateTranslations(request: AddUpdateTranslationsRequest) {
    const url = `/${apiraiser}/${version}/${provider}/Internationalization/Translations`;
    const result = await Rest.Post({ url, data: request });
    return result;
  }
  /// Delete Translations
  async deleteTranslation(deleteTranslationsRequest: DeleteTranslationsRequest) {
    const url = `/${apiraiser}/${version}/${provider}/Internationalization/Translations`;
    const result = await Rest.Delete({ url, data: deleteTranslationsRequest });
    return result;
  }

  /// Insert a new locale
  async insertLocale(data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${provider}/Internationalization/Locale`, data });
    return result;
  }

  /// Update locale
  async updateLocale(id: string, data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${provider}/Internationalization/Locale/${id}`,
      data,
    });
    return result;
  }

  /// Delete a locale
  async deleteLocale(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${provider}/Internationalization/Locale/${id}` });
    return result;
  }

  /// Insert a currency
  async insertCurrency(data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${provider}/Internationalization/Currency`, data });
    return result;
  }

  /// Update currency
  async updateCurrency(id: string, data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${provider}/Internationalization/Currency/${id}`,
      data,
    });
    return result;
  }

  /// Delete a currency
  async deleteCurrency(id: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${provider}/Internationalization/Currency/${id}`,
    });
    return result;
  }
  async getPlugins() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Internationalization/GetPlugins`,
    });
    return result;
  }

  async getUserLocale(locale: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Internationalization/GetUserLocale?locale=${locale}`,
    });
    return result;
  }

  /// Insert a language
  async insertLanguage(data: object) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${provider}/Internationalization/Language`, data });
    return result;
  }

  /// Update language
  async updateLanguage(id: string, data: object) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${provider}/Internationalization/Language/${id}`,
      data,
    });
    return result;
  }

  /// Delete a language
  async deleteLanguage(id: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${provider}/Internationalization/Language/${id}`,
    });
    return result;
  }
}

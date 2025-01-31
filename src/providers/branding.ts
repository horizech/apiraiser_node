import { Rest } from '../helpers';
import { version, apiraiser, provider } from '../constants';

/// Branding Provider APIs
export class BrandingProvider {
  // Get Settings
  async getSettings() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Branding/Settings`,
    });
    return result;
  }

  // Update Settings
  async updateSettings(data: any) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${provider}/Branding/Settings`,
      data,
    });
    return result;
  }

  /// Get Logo
  async getLogoById(id?: string) {
    const url = `/${apiraiser}/${version}/${provider}/Branding/GetLogoById/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Plugins
  async getPlugins() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Branding/GetPlugins` });
    return result;
  }
}

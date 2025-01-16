import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Branding App APIs
export class BrandingApp {
  // Get Settings
  async getSettings() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/Branding/Settings`,
    });
    return result;
  }

  // Update Settings
  async updateSettings(data: any) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/Branding/Settings`,
      data,
    });
    return result;
  }
}

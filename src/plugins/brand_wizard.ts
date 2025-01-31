import { Rest } from '../helpers';
import { version, apiraiser, plugin } from '../constants';

/// Brand Wizard APIs
export class BrandWizardPlugin {
  // Get Settings
  async getSettings() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/BrandWizard/Settings`,
    });
    return result;
  }

  // Update Settings
  async updateSettings(data: any) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${plugin}/BrandWizard/Settings`,
      data,
    });
    return result;
  }
}

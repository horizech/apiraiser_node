import { Rest } from '../helpers';
import { EmailRequest } from '../interfaces';
import { version, apiraiser, provider } from '../constants';

/// Email APIs
export class EmailProvider {
  /// Send Email
  async sendEmail(request: EmailRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Email/SendEmail`,
      data: request,
    });
    return result;
  }

  // Get Plugins
  async getPlugins() {
    const result = await Rest.Get({ url: `/${apiraiser}/${version}/${provider}/Email/GetPlugins` });
    return result;
  }
}

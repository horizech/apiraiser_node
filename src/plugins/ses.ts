import { Rest } from '../helpers';
import { EmailRequest } from '../interfaces';
import { version, apiraiser, plugin } from '../constants';

/// SES Email Plugin APIs
export class SESEmailPlugin {
  /// Send Email
  async sendEmail(request: EmailRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/SES/SendEmail`,
      data: request,
    });
    return result;
  }
}

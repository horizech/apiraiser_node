import { Rest } from '../helpers';
import { EmailRequest } from '../interfaces';
import { version, apiraiser, plugin } from '../constants';

/// SMTP APIs
export class SMTP {
  /// Send Email
  async sendEmail(request: EmailRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/SMTP/SendEmail`,
      data: request,
    });
    return result;
  }
}

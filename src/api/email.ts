import { Rest } from '../helpers';
import { EmailRequest } from '../interfaces';
import { version, apiraiser, provider } from '../constants';

/// Email APIs
export class Email {
  /// Send Email
  async sendEmail(request: EmailRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Email/SendEmail`,
      data: request,
    });
    return result;
  }
}

import { Rest } from '../helpers';
import { EmailRequest } from '../interfaces';
import { version } from '../version';

/// SMTP APIs
export class SMTP {
  /// Send Email
  async sendEmail(request: EmailRequest) {
    const result = await Rest.Post({
      url: `/API/${version}/SMTP/SendEmail`,
      data: request,
    });
    return result;
  }
}

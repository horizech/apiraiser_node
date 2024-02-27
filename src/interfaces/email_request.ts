/// Model used for making email request
export interface EmailRequest {
  senderName?: null | string;
  senderEmail?: null | string;
  receivers: string[];
  cc?: null | string[];
  bcc?: null | string[];
  body?: null | string;
  subject?: null | string;
}

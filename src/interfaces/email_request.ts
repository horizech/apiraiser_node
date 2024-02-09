/// Model used for making email request
export interface EmailRequest {
  sender?: null | string;
  receivers: string[];
  cc?: null | string[];
  bcc?: null | string[];
  body?: null | string;
  subject?: null | string;
}

import { ApiraiserComponentActionRequest } from './apiraiser_component_action_request';

export interface RecurringBackgroundJobRequest {
  ActionRequest: ApiraiserComponentActionRequest;
  JobName: string;
  Cron: string;
}

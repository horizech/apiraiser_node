import { ApiraiserComponentActionRequest } from './apiraiser_component_action_request';

export interface ScheduledBackgroundJobRequest {
  ActionRequest: ApiraiserComponentActionRequest;
  Delay: string;
}

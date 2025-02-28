import { apiraiser, provider, version } from '../constants';
import { Rest } from '../helpers';
import { EnqueueBackgroundJobRequest, RecurringBackgroundJobRequest, ScheduledBackgroundJobRequest } from '../interfaces';

/// Background Jobs APIs
export class BackgroundJobsProvider {
  /// Enqueue
  async Enqueue(request : EnqueueBackgroundJobRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/BackgroundJobs/Enqueue`,
      data: request
    });
    return result;
  }

  /// Recurring
  async Recurring(request : RecurringBackgroundJobRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/BackgroundJobs/Recurring`,
      data: request
    });
    return result;
  }

  /// Schedule
  async Schedule(request : ScheduledBackgroundJobRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/BackgroundJobs/Schedule`,
      data: request
    });
    return result;
  }
}

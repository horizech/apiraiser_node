import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';

/// Profile App APIs
export class ProfileApp {
  /// Get records
  async getUserDetail() {
    const url = `/${apiraiser}/${version}/${app}/Profile`;
    const result = await Rest.Get({
      url,
    });
    return result;
  }
  async getUserMedia() {
    const url = `/${apiraiser}/${version}/${app}/Profile/GetMedia`;
    const result = await Rest.Get({
      url,
    });
    return result;
  }
  async updateProfile(data: object) {
    const url = `/${apiraiser}/${version}/${app}/Profile/UpdateProfile`;
    const result = await Rest.Put({
      url,
      data,
    });
    return result;
  }
}

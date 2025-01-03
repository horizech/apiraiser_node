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
  async updateUsername(data: object) {
    const url = `/${apiraiser}/${version}/${app}/Profile/UpdateUsername`;
    const result = await Rest.Put({
      url,
      data,
    });
    return result;
  }
  async updateProfilePicture(data: object) {
    const url = `/${apiraiser}/${version}/${app}/Profile/UpdateProfilePicture`;
    const result = await Rest.Put({
      url,
      data,
    });
    return result;
  }
  async updateProfileCover(data: object) {
    const url = `/${apiraiser}/${version}/${app}/Profile/UpdateProfileCover`;
    const result = await Rest.Put({
      url,
      data,
    });
    return result;
  }
  async changeEmail(email: string) {
      const result = await Rest.Post({
        url: `/${apiraiser}/${version}/${app}/Profile/ChangeEmail`,
        data: email,
      });
      return result;
    }
  async changePassword(id: string, password: string, currentPassword: string) {
      const url = `/${apiraiser}/${version}/${app}/Profile/ChangePassword`;
      const result = await Rest.Post({ url, data: {CurrentPassword: currentPassword, Password: password, Id: id } });
      return result;
    }
}

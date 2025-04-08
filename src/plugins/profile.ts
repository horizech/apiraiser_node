import { Rest } from '../helpers';
import { version, apiraiser, plugin } from '../constants';

/// Profile Plugin APIs
export class ProfilePlugin {
  /// Get User Detail
  async getUserDetail() {
    const url = `/${apiraiser}/${version}/${plugin}/Profile`;
    const result = await Rest.Get({
      url,
    });
    return result;
  }

  /// Get user media
  async getUserMedia() {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/GetMedia`;
    const result = await Rest.Get({
      url,
    });
    return result;
  }

  // Update Username
  async updateUsername(data: object) {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/UpdateUsername`;
    const result = await Rest.Put({
      url,
      data,
    });
    return result;
  }

  // Update Profile Picture
  async updateProfilePicture(data: object) {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/UpdateProfilePicture`;
    const result = await Rest.Put({
      url,
      data,
    });
    return result;
  }

  // Remove Profile Picture
  async removeProfilePicture() {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/RemoveProfilePicture`;
    const result = await Rest.Put({
      url,
      data: {
        Photo: null,
      },
    });
    return result;
  }

  // Update Profile Cover
  async updateProfileCover(data: object) {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/UpdateProfileCover`;
    const result = await Rest.Put({
      url,
      data,
    });
    return result;
  }

  // Remove Profile Cover
  async removeProfileCover() {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/RemoveProfileCover`;
    const result = await Rest.Put({
      url,
      data: {
        CoverPhoto: null,
      },
    });
    return result;
  }

  // Change Email
  async changeEmail(email: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/Profile/ChangeEmail`,
      data: email,
    });
    return result;
  }

  // Change Password
  async changePassword(id: string, password: string, currentPassword: string) {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/ChangePassword`;
    const result = await Rest.Post({ url, data: { CurrentPassword: currentPassword, Password: password, Id: id } });
    return result;
  }

  // Get User Profile
  async getUserProfile() {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/UserProfile`;
    const result = await Rest.Get({ url });
    return result;
  }

  // Insert User Profile
  async insertUserProfile(data: object) {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/UserProfile`;
    const result = await Rest.Post({ url, data });
    return result;
  }

  // Update User Profile
  async updateUserProfile(data: object) {
    const url = `/${apiraiser}/${version}/${plugin}/Profile/UserProfile`;
    const result = await Rest.Put({ url, data });
    return result;
  }
}

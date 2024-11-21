import { Rest } from '../helpers';
import { EncryptionRequest } from '../interfaces';
import { version, apiraiser, plugin, provider } from '../constants';

/// Encryption APIs
export class EncryptionProvider {
  /// Encrypt Data
  async encryptData(request: EncryptionRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Encryption/EncryptData`,
      data: request,
    });
    return result;
  }
  /// Decrypt data
  async decryptData(request: EncryptionRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Encryption/DecryptData`,
      data: request,
    });
    return result;
  }

  async getPlugins() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${provider}/Encryption/GetPlugins`,
    });
    return result;
  }
}

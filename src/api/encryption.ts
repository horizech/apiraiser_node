import { Rest } from '../helpers';
import { EncryptionRequest } from '../interfaces';
import { version, apiraiser, plugin, provider } from '../constants';

/// Encryption APIs
export class Encryption {
  /// Generate AES RSA Pair using md5 encrypted password
  async generateAESRSAPair(password: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Encryption/GenerateAESRSAPair`,
      data: password,
    });
    return result;
  }
  /// Get encryption keys
  async getEncryptionKeys(password: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${provider}/Encryption/GetEncryptionKeys`,
      data: password,
    });
    return result;
  }
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
}

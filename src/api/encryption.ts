import { Rest } from '../helpers';
import { EncryptionRequest } from '../interfaces';
import { version, apiraiser, plugin } from '../constants';

/// Encryption APIs
export class Encryption {
  /// Generate AES RSA Pair using md5 encrypted password
  async generateAESRSAPair(password: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/Encryption/GenerateAESRSAPair`,
      data: password,
    });
    return result;
  }
  /// Get encryption keys
  async getEncryptionKeys(password: string) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/Encryption/GetEncryptionKeys`,
      data: password,
    });
    return result;
  }
  /// Encrypt Data
  async encryptData(request: EncryptionRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/Encryption/EncryptData`,
      data: request,
    });
    return result;
  }
  /// Decrypt data
  async decryptData(request: EncryptionRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/Encryption/DecryptData`,
      data: request,
    });
    return result;
  }
}

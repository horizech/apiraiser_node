import { Rest } from '../helpers';
import { EncryptionRequest } from '../interfaces';

/// Encryption APIs
export class Encryption {
  /// Generate AES RSA Pair using md5 encrypted password
  async generateAESRSAPair(password: string) {
    const result = await Rest.Post({
      url: `/API/Encryption/GenerateAESRSAPair`,
      data: password,
    });
    return result;
  }
  /// Get encryption keys
  async getEncryptionKeys(password: string) {
    const result = await Rest.Post({
      url: `/API/Encryption/GetEncryptionKeys`,
      data: password,
    });
    return result;
  }
  /// Encrypt Data
  async encryptData(request: EncryptionRequest) {
    const result = await Rest.Post({
      url: `/API/Encryption/EncryptData`,
      data: request,
    });
    return result;
  }
  /// Decrypt data
  async decryptData(request: EncryptionRequest) {
    const result = await Rest.Post({
      url: `/API/Encryption/DecryptData`,
      data: request,
    });
    return result;
  }
}

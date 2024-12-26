import { Rest } from '../helpers';
import { version, apiraiser, plugin } from '../constants';
import { ClientRequest, QuerySearchItem } from '../interfaces';

/// OAuthLink Plugin APIs
export class OAuthLinkPlugin {
  /// Get Client
  async getClient(clientId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Client/${clientId}`,
    });
    return result;
  }

  /// Add Client
  async AddClient(request: ClientRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Client`,
      data: request,
    });
    return result;
  }

  /// Update Client
  async updateClient(clientId: string, request: ClientRequest) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Client/${clientId}`,
      data: request,
    });
    return result;
  }

  /// Delete Client
  async deleteClient(clientId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Client/${clientId}`,
    });
    return result;
  }
  // Get Clients
  async getClients(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${plugin}/OAuthLink/Clients?pageSize=${pageSize}&page=${page}`;

    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }

    const result = await Rest.Get({ url });
    return result;
  }
  // Get Scopes
  async getScopes(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${plugin}/OAuthLink/Scopes?pageSize=${pageSize}&page=${page}`;

    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }

    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Scope by id
  async getScopeById(id: string) {
    const url = `/${apiraiser}/${version}/${plugin}/OAuthLink/Scope/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  // Add Scope
  async addScope(request: any) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Scope`,
      data: request,
    });
    return result;
  }
  // Update Scope
  async updateScope(scope: string, request: any) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Scope/${scope}`,
      data: request,
    });
    return result;
  }
  /// Delete Scope
  async deleteScope(scope: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Scope/${scope}`,
    });
    return result;
  }

  /// Get Policies
  async getPolicies() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Policies`,
    });
    return result;
  }
  /// Get Policy Attribute Types
  async GetPolicyAttributeTypes() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/PolicyAttributeTypes`,
    });
    return result;
  }

  async getPolicyAttributes(conditions?: QuerySearchItem[]) {
    const url = `/${apiraiser}/${version}/${plugin}/OAuthLink/GetPolicyAttributes`;
    const result = await Rest.Post({
      url,
      data: conditions || [],
    });
    return result;
  }

  // Get Settings
  async getSettings() {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Settings`,
    });
    return result;
  }

  // Update Settings
  async updateSettings(data: any) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${plugin}/OAuthLink/Settings`,
      data: data,
    });
    return result;
  }
}

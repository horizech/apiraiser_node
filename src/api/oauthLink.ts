import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';
import { ClientRequest } from '../interfaces';

/// OAuthLink APIs
export class OAuthLink {
  /// Get Client
  async getClient(clientId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/OAuthLink/Client/${clientId}`,
    });
    return result;
  }

  /// Add Client
  async AddClient(request: ClientRequest) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${app}/OAuthLink/Client`,
      data: request,
    });
    return result;
  }

  /// Update Client
  async updateClient(clientId: string, request: ClientRequest) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/OAuthLink/Client/${clientId}`,
      data: request,
    });
    return result;
  }

  /// Delete Client
  async deleteClient(clientId: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/OAuthLink/Client/${clientId}`,
    });
    return result;
  }
  // Get Clients
  async getClients(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/OAuthLink/Clients?pageSize=${pageSize}&page=${page}`;

    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }

    const result = await Rest.Get({ url });
    return result;
  }
  // Get Scopes
  async getScopes(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/OAuthLink/Scopes?pageSize=${pageSize}&page=${page}`;

    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }

    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Scope by id
  async getScopeById(id: string) {
    const url = `/${apiraiser}/${version}/${app}/OAuthLink/Scope/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  // Add Scope
  async addScope(request: any) {
    const result = await Rest.Post({
      url: `/${apiraiser}/${version}/${app}/OAuthLink/Scope`,
      data: request,
    });
    return result;
  }
  // Update Scope
  async updateScope(scope: string, request: any) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/OAuthLink/Scope/${scope}`,
      data: request,
    });
    return result;
  }
  // Delete Scope
  async deleteScope(scope: string) {
    const result = await Rest.Delete({
      url: `/${apiraiser}/${version}/${app}/OAuthLink/Scope/${scope}`,
    });
    return result;
  }
}

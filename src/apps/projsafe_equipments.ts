import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';
import { ProjSafeEquipment } from '../interfaces/projsafe_equimpent';
import { ProjSafeEquipmentMedia } from '../interfaces';

/// Proj Safe Equipments App APIs
export class ProjSafeEquipmentsApp {
  /// Get Departments
  async getDepartments() {
    const url = `/${apiraiser}/${version}/${app}/ProjSafeEquipments/Departments`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Equipments
  async getEquipments(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/ProjSafeEquipments?pageSize=${pageSize}&page=${page}`;
    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Equipment by id
  async getEquipmentById(id: string) {
    const url = `/${apiraiser}/${version}/${app}/ProjSafeEquipments/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert an equipment
  async insertEquipment(data: ProjSafeEquipment) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/ProjSafeEquipments`, data });
    return result;
  }

  /// Update an equipment
  async updateEquipment(id: string, data: ProjSafeEquipment) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/ProjSafeEquipments/${id}`,
      data,
    });
    return result;
  }

  /// Delete an equipment
  async deleteEquipment(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/ProjSafeEquipments/${id}` });
    return result;
  }

  /// Get an equipment media
  async getEquipmentMedia(equipment: string) {
    const url = `/${apiraiser}/${version}/${app}/ProjSafeEquipments/Media/${equipment}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Add an equipment media
  async addEquipmentMedia(data: ProjSafeEquipmentMedia) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/ProjSafeEquipments/Media`, data });
    return result;
  }

  /// Delete an equipment media
  async deleteEquipmentMedia(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/ProjSafeEquipments/Media/${id}` });
    return result;
  }

  async downloadMedia(mediaId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/ProjSafeEquipments/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }
}

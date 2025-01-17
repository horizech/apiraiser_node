import { Rest } from '../helpers';
import { version, apiraiser, app } from '../constants';
import { WorkSafetyEquipment } from '../interfaces/worksafety_equimpent';
import { WorkSafetyEquipmentMedia } from '../interfaces';

/// Work Safety Equipments App APIs
export class WorkSafetyEquipmentsApp {
  /// Get Equipments
  async getEquipments(pageSize = -1, page = -1, filtertext = '') {
    let url = `/${apiraiser}/${version}/${app}/WorkSafetyEquipments?pageSize=${pageSize}&page=${page}`;
    if (filtertext) {
      url += `&filtertext=${encodeURIComponent(filtertext)}`;
    }
    const result = await Rest.Get({ url });
    return result;
  }

  /// Get Equipment by id
  async getEquipmentById(id: string) {
    const url = `/${apiraiser}/${version}/${app}/WorkSafetyEquipments/${id}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Insert an equipment
  async insertEquipment(data: WorkSafetyEquipment) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/WorkSafetyEquipments`, data });
    return result;
  }

  /// Update an equipment
  async updateEquipment(id: string, data: WorkSafetyEquipment) {
    const result = await Rest.Put({
      url: `/${apiraiser}/${version}/${app}/WorkSafetyEquipments/${id}`,
      data,
    });
    return result;
  }

  /// Delete an equipment
  async deleteEquipment(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/WorkSafetyEquipments/${id}` });
    return result;
  }

  /// Get an equipment media
  async getEquipmentMedia(equipment: string) {
    let url = `/${apiraiser}/${version}/${app}/WorkSafetyEquipments/Media/${equipment}`;
    const result = await Rest.Get({ url });
    return result;
  }

  /// Add an equipment media
  async addEquipmentMedia(data: WorkSafetyEquipmentMedia) {
    const result = await Rest.Post({ url: `/${apiraiser}/${version}/${app}/WorkSafetyEquipments/Media`, data });
    return result;
  }

  /// Delete an equipment media
  async deleteEquipmentMedia(id: string) {
    const result = await Rest.Delete({ url: `/${apiraiser}/${version}/${app}/WorkSafetyEquipments/Media/${id}` });
    return result;
  }

  async downloadMedia(mediaId: string) {
    const result = await Rest.Get({
      url: `/${apiraiser}/${version}/${app}/WorkSafetyEquipments/Media/Download/${mediaId}`,
      responseType: 'blob',
    });
    return result;
  }
}

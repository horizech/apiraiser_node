import axios from 'axios';
import { Headers, State, toJsonObject } from '../helpers';
import { ColumnInfo } from '../interfaces';

/// Table APIs
export class Table {
  /// Create a new table

  async create(table: string, tableType: string, columns: ColumnInfo[]) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/CreateTable?table=${table}&tableType=${tableType}`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(toJsonObject<ColumnInfo>(columns)),
    });
    return result;
  }

  /// Get all tables
  async getList() {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/GetTablesList`,
      headers: Headers.getHeaders(),
    });
    return result;
  }
}

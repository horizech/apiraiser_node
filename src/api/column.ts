import axios from 'axios';
import { Headers, State, JsonHelper } from '../helpers';
import { ColumnInfo } from '../interfaces';

/// Column APIs
export class Column {
  /// Get predefined columns

  async getPredefinedColumns() {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/GetPredefinedColumns`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Get columns
  async get(table: string) {
    const result = await axios({
      method: 'get',
      url: `${State.endPoint}/API/${table}/Columns`,
      headers: Headers.getHeaders(),
    });
    return result;
  }

  /// Add a new column
  async insert(table: string, columnInfo: ColumnInfo) {
    const result = await axios({
      method: 'post',
      url: `${State.endPoint}/API/${table}/Column`,
      headers: Headers.getHeaders(),
      data: JSON.stringify(JsonHelper.toJsonObject<ColumnInfo>(columnInfo)),
    });
    return result;
  }

  /// Remove column
  async delete(table: string, column: string) {
    const result = await axios({
      method: 'delete',
      url: `${State.endPoint}/API/${table}/Column/${column}`,
      headers: Headers.getHeaders(),
    });
    return result;
  }
}

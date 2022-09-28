import { ColumnDataType } from '../enums';

/// Column information model
export class ColumnInfo {
  name: string = "";
  datatype: ColumnDataType = ColumnDataType.integer;
  isRequired: boolean = false;
  isUnique: boolean = false;
  isForeignKey: boolean = false;
  foreignTable: null | string = null;
  foreignName: null | string = null;
  defaultValue: null | string = null;
}

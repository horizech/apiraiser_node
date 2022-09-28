import { ColumnDataType } from '../enums';

/// Column information model
export class ColumnInfo {
  name: string = '';
  datatype: ColumnDataType = ColumnDataType.integer;
  isRequired: boolean = false;
  isUnique: boolean = false;
  isForeignKey: boolean = false;
  foreignTable: null | string = null;
  foreignName: null | string = null;
  defaultValue: null | string = null;

  toJsonObject() {
    return {
      Name: this.name,
      Datatype: this.datatype,
      IsRequired: this.isRequired,
      IsUnique: this.isUnique,
      IsForeignKey: this.isForeignKey,
      ForeignTable: this.foreignTable,
      ForeignName: this.foreignName,
      DefaultValue: this.defaultValue,
    };
  }
}

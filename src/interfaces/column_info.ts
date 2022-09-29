import { ColumnDataType } from '../enums';

/// Column information model
export interface ColumnInfo {
  name: string;
  datatype: ColumnDataType;
  isRequired: boolean;
  isUnique: boolean;
  isForeignKey: boolean;
  foreignTable: null | string;
  foreignName: null | string;
  defaultValue: null | string;
  
  // toJsonObject(): any = () => {
  //   return {
  //     Name: this.name,
  //     Datatype: this.datatype,
  //     IsRequired: this.isRequired,
  //     IsUnique: this.isUnique,
  //     IsForeignKey: this.isForeignKey,
  //     ForeignTable: this.foreignTable,
  //     ForeignName: this.foreignName,
  //     DefaultValue: this.defaultValue,
  //   };
  // }
}


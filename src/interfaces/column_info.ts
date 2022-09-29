import { ColumnDataType } from '../enums';

/// Column information model
export interface ColumnInfo {
  Name: string;
  Datatype: ColumnDataType;
  IsRequired: boolean;
  IsUnique: boolean;
  IsForeignKey: boolean;
  ForeignTable: null | string;
  ForeignName: null | string;
  DefaultValue: null | string;

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

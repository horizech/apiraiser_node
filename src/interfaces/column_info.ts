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
}

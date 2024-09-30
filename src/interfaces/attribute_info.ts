import { AttributeDataType } from '../enums';

/// Attribute information model
export interface AttributeInfo {
  Name: string;
  Datatype: AttributeDataType;
  IsRequired: boolean;
  IsUnique: boolean;
  IsForeignKey: boolean;
  ForeignCollection: null | string;
  ForeignName: null | string;
  DefaultValue: null | string;
}

import { ColumnCondition } from '../enums';

/// Model used for conditions
export interface QuerySearchItem {
  name: string;
  value: any;
  condition: ColumnCondition;
  caseSensitive: boolean;

  // toJsonObject() {
  //   return {
  //     Name: this.name,
  //     Value: this.value,
  //     Condition: this.condition,
  //     CaseSensitive: this.caseSensitive,
  //   };
  // }
}

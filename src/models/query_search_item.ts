import { ColumnCondition } from "../enums";

/// Model used for conditions
export class QuerySearchItem {
  name: string = "";
  value: any;
  condition?: ColumnCondition = ColumnCondition.equal;
  caseSensitive: boolean = false;
}

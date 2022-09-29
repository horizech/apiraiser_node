export class JsonHelper {
  static toJsonObject<T>(properties: any) {
    const result = {} as any;
    for (const property of Object.keys(properties) as (keyof T)[]) {
      const propertyStr = property.toString();
      const propertyPascalCase: string = propertyStr[0].toUpperCase() + propertyStr.substring(1);
      result[propertyPascalCase] = properties[property];
    }
    return result;
  }
}

export class JsonHelper {
  // static toJsonObject<T>(properties: any) {
  //     return <TActual extends T>(value: TActual) => {
  //         const result = {} as any;
  //         for (const property of Object.keys(properties) as (keyof T)[]) {
  //             const propertyPascalCase: string = property.toString().replace(/(\w)(\w*)/g,
  //             (g0,g1,g2) => {return g1.toUpperCase() + g2.toLowerCase();});
  //             result[propertyPascalCase] = value[property];
  //         }
  //         return result;
  //     }
  // }

  static toJsonObject<T>(properties: any) {
    const result = {} as any;
    for (const property of Object.keys(properties) as (keyof T)[]) {
      const propertyStr = property.toString();
      const propertyPascalCase: string = propertyStr[0].toUpperCase() + propertyStr.substring(1);
      // const propertyPascalCase: string = property.toString().replace(/(\w)(\w*)/g,
      // (g0,g1,g2) => {return g1.toUpperCase() + g2.toLowerCase();});
      result[propertyPascalCase] = properties[property];
    }
    return result;
  }
}

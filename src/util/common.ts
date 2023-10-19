export function jsonParser(data: Array<any> | object | string): any {
    const json: string = JSON.stringify(data);
    return JSON.parse(json, (key: string, value: any) => {
      if (typeof value === 'string') {
        try {
          return JSON.parse(value);
        } catch (error) {
          return value;
        }
      }
      return value;
    });
  }
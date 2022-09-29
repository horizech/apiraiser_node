/// State class useful for storing, getting and removing item
export class Store {
  static storage: any;

  /// Set item by [key] and [data]
  static setItem(key: string, data: any) {
    this.storage.setItem(key, data);
  }

  /// Get item by [key]
  static getItem(key: string) {
    return this.storage.getItem(key);
  }

  /// Remove item by [key]
  static removeItem(key: string) {
    this.storage.removeItem(key);
  }
}

if (typeof localStorage === 'undefined' || localStorage === null) {
  /* eslint-disable @typescript-eslint/no-var-requires */
  /* tslint:disable no-var-requires */
  const LocalStorage = require('node-localstorage').LocalStorage;
  Store.storage = new LocalStorage('./scratch');
} else {
  Store.storage = localStorage;
}

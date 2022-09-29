if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

/// State class useful for storing, getting and removing item
export class Store {

    /// Set item by [key] and [data]
    static setItem(key: string, data: any) {
        localStorage.setItem(key, data);
    }

    /// Get item by [key]
    static getItem(key: string) {
        return localStorage.getItem(key);
    }

    /// Remove item by [key]
    static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}
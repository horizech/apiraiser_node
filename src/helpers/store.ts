import store from "store2";

/// State class useful for storing, getting and removing item
export class Store {

    /// Set item by [key] and [data]
    static setItem(key: string, data: any) {
        store.set(key, data, true);
    }

    /// Get item by [key]
    static getItem(key: string) {
        return store.get(key);
    }

    /// Remove item by [key]
    static removeItem(key: string) {
        store.remove(key);
    }
}
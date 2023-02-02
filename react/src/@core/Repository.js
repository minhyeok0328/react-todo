export default class Repository {
  static #storage = localStorage;

  static get(key) {
    return JSON.parse(this.#storage.getItem(key));
  }

  static set(key, value) {
    this.#storage.setItem(key, JSON.stringify(value));
  }

  static remove(key) {
    this.#storage.removeItem(key);
  }
}
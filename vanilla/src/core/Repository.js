export default class Repository {
  #storage;
  
  constructor(storage = localStorage) {
    this.#storage = storage;
  }
  
  get(key) {
    return JSON.parse(this.#storage.getItem(key));
  }
  
  set(key, value) {
    this.#storage.setItem(key, JSON.stringify(value));
  }
  
  remove(key) {
    this.#storage.removeItem(key);
  }
}
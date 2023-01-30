export default class Observe {
  constructor(value, callback) {
    return new Proxy(value, {
      get(target, property) {
        return target[property];
      },
      set(target, property, value) {
        const oldValue = target[property];
        target[property] = value;

        if (JSON.stringify(value) !== JSON.stringify(oldValue) && callback) {
          callback(property, oldValue, value);
        }

        return true;
      },
    });
  }
}
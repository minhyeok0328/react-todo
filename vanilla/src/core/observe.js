export default class Observe {
  constructor(value, callback) {
    const proxy = new Proxy(value, {
      get(target, property) {
        return target[property];
      },
      set(target, property, value) {
        const oldValue = target[property];
        target[property] = value;

        if (value !== oldValue && callback) {
          callback(property, oldValue, value);
        }

        return true;
      },
    });

    return proxy;
  }
}
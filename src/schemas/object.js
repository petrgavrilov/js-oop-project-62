const isObject = (value) =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export default class ObjectSchema {
  constructor() {
    this.options = {
      shape: {},
    };
  }

  shape(shape = {}) {
    if (!isObject(shape)) {
      return this;
    }
    this.options.shape = shape;
    return this;
  }

  isValid(object) {
    if (object === null || object === undefined) {
      return true;
    }

    if (!isObject(object)) {
      return false;
    }

    return Object.keys(this.options.shape).every((key) => {
      const value = object[key];
      return this.options.shape[key].isValid(value);
    });
  }
}

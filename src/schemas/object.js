export default class ObjectSchema {
  shape(shape = {}) {
    this.options = {
      shape,
    };

    return this;
  }

  isValid(object) {
    return Object.keys(this.options.shape).every((key) => {
      const value = object[key];
      return this.options.shape[key].isValid(value);
    });
  }
}

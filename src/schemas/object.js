export default class ObjectSchema {
  options = {
    shape: {},
  };

  shape(shape) {
    this.options.shape = shape;
  }

  isValid(object) {
    return Object.keys(this.options.shape).every((key) => {
      const value = object[key];
      return this.options.shape[key].isValid(value);
    });
  }
}

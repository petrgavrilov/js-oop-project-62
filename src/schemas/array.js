export default class ArraySchema {
  constructor(checker, customValidators) {
    this.checker = checker;
    this.customValidators = customValidators;
  }

  required() {
    this.checker.add((value) => Array.isArray(value));
    return this;
  }

  sizeof(length) {
    this.checker.add((value) => {
      if (!Array.isArray(value)) {
        return true;
      }

      return value.length === length;
    });

    return this;
  }

  test(name, ...params) {
    const customValidator = this.customValidators.get('array', name);
    this.checker.add((value) => customValidator(value, ...params));
    return this;
  }

  isValid(value) {
    return this.checker.run(value);
  }
}

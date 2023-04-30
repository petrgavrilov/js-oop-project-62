export default class NumberSchema {
  constructor(checker, customValidators) {
    this.checker = checker;
    this.customValidators = customValidators;
  }

  required() {
    this.checker.add((value) => typeof value === 'number');
    return this;
  }

  positive() {
    this.checker.add((value) => {
      if (typeof value !== 'number') {
        return true;
      }
      return value > 0;
    });
    return this;
  }

  range(from, to) {
    this.checker.add((value) => {
      if (typeof value !== 'number') {
        return true;
      }
      return value >= from && value <= to;
    });
    return this;
  }

  test(name, ...params) {
    const customValidator = this.customValidators.get('number', name);
    this.checker.add((value) => customValidator(value, ...params));
    return this;
  }

  isValid(value) {
    return this.checker.run(value);
  }
}

export default class StringSchema {
  constructor(checker, customValidators) {
    this.checker = checker;
    this.customValidators = customValidators;
  }

  required() {
    this.checker.add((value) => !!value?.trim());

    return this;
  }

  minLength(minLength) {
    this.checker.add((value) => {
      if (!value || typeof value !== 'string') {
        return true;
      }
      return value?.length >= minLength;
    });
    return this;
  }

  contains(string) {
    this.checker.add((value) => {
      if (!value || typeof value !== 'string') {
        return true;
      }
      return value.includes(string);
    });
    return this;
  }

  test(name, ...params) {
    const customValidator = this.customValidators.get('string', name);
    this.checker.add((value) => customValidator(value, ...params));
    return this;
  }

  isValid(value) {
    return this.checker.run(value);
  }
}

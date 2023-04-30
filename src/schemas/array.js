export default class ArraySchema {
  constructor(checker) {
    this.checker = checker;
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

  isValid(value) {
    return this.checker.run(value);
  }
}

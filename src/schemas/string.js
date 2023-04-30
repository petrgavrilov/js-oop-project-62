export default class StringSchema {
  constructor(checker) {
    this.checker = checker;
  }

  required() {
    this.checker.add((value) => !!value?.trim());

    return this;
  }

  minLength(minLength) {
    this.checker.add((value) => {
      if (!value || typeof value !== "string") {
        return true;
      }
      return value?.length >= minLength;
    });
    return this;
  }

  contains(string) {
    this.checker.add((value) => {
      if (!value || typeof value !== "string") {
        return true;
      }
      return value.includes(string);
    });
    return this;
  }

  isValid(value) {
    return this.checker.run(value);
  }
}

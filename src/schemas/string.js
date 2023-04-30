export default class StringSchema {
  options = {
    isRequired: false,
    containStrings: [],
    minLength: null,
  };

  contains(string) {
    this.options.containStrings.push(string);
  }

  required() {
    this.options.isRequired = true;
  }

  minLength(minLength) {
    this.options.minLength = minLength;
  }

  isValid(value) {
    const checks = [];

    if (this.options.isRequired) {
      checks.push(!!value);
    }

    if (this.options.minLength) {
      checks.push(value.length >= this.options.minLength);
    }

    if (this.options.containStrings.length > 0) {
      checks.push(
        this.options.containStrings.every((string) => value.includes(string))
      );
    }

    return checks.every((check) => check === true);
  }
}

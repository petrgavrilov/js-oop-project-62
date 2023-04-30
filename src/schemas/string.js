export default class StringSchema {
  constructor() {
    this.isRequired = false;
    this.containStrings = [];
  }

  contains(string) {
    this.containStrings.push(string);
  }

  required() {
    this.isRequired = true;
  }

  isValid(value) {
    const checks = [];

    if (this.isRequired) {
      checks.push(!!value);
    }

    if (this.containStrings.length > 0) {
      checks.push(
        this.containStrings.every((string) => value.includes(string))
      );
    }

    return checks.every((check) => check === true);
  }
}

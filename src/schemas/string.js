export default class StringSchema {
  options = {
    isRequired: false,
    containStrings: [],
    minLength: null,
  };

  contains(string) {
    this.options.containStrings.push(string);
    return this;
  }

  required() {
    this.options.isRequired = true;
    return this;
  }

  minLength(minLength) {
    this.options.minLength = minLength;
    return this;
  }

  isValid(value) {
    const checks = [];

    if (this.options.isRequired) {
      checks.push((value) => !!value);
    }

    if (this.options.minLength) {
      checks.push((value) => {
        if (!value && !this.options.required) {
          return true;
        }
        return value?.length >= this.options.minLength;
      });
    }

    if (this.options.containStrings.length > 0) {
      checks.push((value) =>
        this.options.containStrings.every((string) => value.includes(string))
      );
    }

    return checks.every((check) => check(value) === true);
  }
}

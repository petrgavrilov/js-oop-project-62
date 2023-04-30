export default class CustomValidators {
  validators = [];

  add(type, name, validator) {
    this.validators.push({ type, name, validator });
  }

  get(type, name) {
    return this.validators.find(
      (validator) => validator.type === type && validator.name === name
    )?.validator;
  }
}

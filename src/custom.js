export default class CustomValidators {
  constructor() {
    this.validators = [];
  }

  add(type, name, validator) {
    this.validators.push({ type, name, validator });
  }

  get(type, name) {
    const item = this.validators.find(
      (validator) => validator.type === type && validator.name === name,
    );

    return item?.validator;
  }
}

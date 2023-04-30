import Checker from './checker.js';
import ArraySchema from './schemas/array.js';
import NumberSchema from './schemas/number.js';
import ObjectSchema from './schemas/object.js';
import StringSchema from './schemas/string.js';
import CustomValidators from './custom.js';

export default class Validator {
  constructor() {
    this.customValidators = new CustomValidators();

    this.schemas = {
      string: StringSchema,
      number: NumberSchema,
      array: ArraySchema,
      object: ObjectSchema,
    };
  }

  string() {
    return this.createSchema('string');
  }

  number() {
    return this.createSchema('number');
  }

  array() {
    return this.createSchema('array');
  }

  object() {
    return this.createSchema('object');
  }

  createSchema(type) {
    return new this.schemas[type](new Checker(), this.customValidators);
  }

  addValidator(type, name, validator) {
    this.customValidators.add(type, name, validator);
  }
}

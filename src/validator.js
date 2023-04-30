import Checker from "./checker";
import ArraySchema from "./schemas/array";
import NumberSchema from "./schemas/number";
import ObjectSchema from "./schemas/object";
import StringSchema from "./schemas/string";
import CustomValidators from "./custom";

export default class Validator {
  static schemas = {
    string: StringSchema,
    number: NumberSchema,
    array: ArraySchema,
    object: ObjectSchema,
  };

  constructor() {
    this.customValidators = new CustomValidators();
  }

  string() {
    return this.createSchema("string");
  }

  number() {
    return this.createSchema("number");
  }

  array() {
    return this.createSchema("array");
  }

  object() {
    return this.createSchema("object");
  }

  createSchema(type) {
    return new Validator.schemas[type](new Checker(), this.customValidators);
  }

  addValidator(type, name, validator) {
    this.customValidators.add(type, name, validator);
  }
}

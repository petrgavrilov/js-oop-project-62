import Checker from "./checker";
import ArraySchema from "./schemas/array";
import NumberSchema from "./schemas/number";
import ObjectSchema from "./schemas/object";
import StringSchema from "./schemas/string";

export default class Validator {
  string() {
    return new StringSchema(new Checker());
  }

  number() {
    return new NumberSchema(new Checker());
  }

  array() {
    return new ArraySchema(new Checker());
  }

  object() {
    return new ObjectSchema(new Checker());
  }
}

import Checker from "./checker";
import NumberSchema from "./schemas/number";
import StringSchema from "./schemas/string";

export default class Validator {
  string() {
    return new StringSchema(new Checker());
  }

  number() {
    return new NumberSchema(new Checker());
  }
}

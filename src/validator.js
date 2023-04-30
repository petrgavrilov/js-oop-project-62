import StringSchema from "./schemas/string";

export default class Validator {
  string() {
    return new StringSchema();
  }
}

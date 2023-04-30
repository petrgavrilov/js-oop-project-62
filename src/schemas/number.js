import { type } from "os";

export default class NumberSchema {
  constructor(checker) {
    this.checker = checker;
  }

  required() {
    this.checker.add((value) => {
      return typeof value === "number";
    });
    return this;
  }

  positive() {
    this.checker.add((value) => {
      if (typeof value !== "number") {
        return true;
      }
      return value > 0;
    });
    return this;
  }

  range(from, to) {
    this.checker.add((value) => {
      if (typeof value !== "number") {
        return true;
      }
      return value >= from && value <= to;
    });
    return this;
  }

  isValid(value) {
    return this.checker.run(value);
  }
}

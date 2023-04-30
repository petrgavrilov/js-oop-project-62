import { describe, test, expect } from "@jest/globals";
import Validator from "../validator";

describe("validate objects", () => {
  test("should validate objects shape", () => {
    const v = new Validator();

    const schema = v.object();

    schema.shape({
      name: v.string().required(),
      age: v.number().positive(),
    });

    expect(schema.isValid({ name: "kolya", age: 100 })).toBe(true);
    expect(schema.isValid({ name: "maya", age: null })).toBe(true);
    expect(schema.isValid({ name: "", age: null })).toBe(false);
    expect(schema.isValid({ name: "ada", age: -5 })).toBe(false);
  });
});
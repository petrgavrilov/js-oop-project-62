import { describe, test, expect } from "@jest/globals";
import Validator from "../validator";

describe("validator", () => {
  test("it works", () => {
    const validator = new Validator();

    expect(validator).toBeTruthy();
  });
});

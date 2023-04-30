export default class Checker {
  checks = [];

  add(check) {
    this.checks.push(check);
  }

  run(value) {
    return this.checks.every((check) => check(value) === true);
  }
}

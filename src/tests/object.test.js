import { describe, test, expect } from '@jest/globals';
import Validator from '../validator';

describe('validate objects', () => {
  test('should validate objects shape', () => {
    const v = new Validator();

    const schema = v.object();

    expect(schema.isValid({})).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid('123')).toBe(false);
    expect(schema.isValid(123)).toBe(false);

    schema.shape({
      name: v.string().required(),
      age: v.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
    expect(schema.isValid({ name: 'maya', age: null })).toBe(true);
    expect(schema.isValid({ name: '', age: null })).toBe(false);
    expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
  });

  test('should validate without shape', () => {
    const v = new Validator();

    const schema = v.object();
    expect(schema.shape().isValid({ lol: 'kek' })).toBe(true);
  });

  test('should validate with non-object shape', () => {
    const v = new Validator();

    const schema = v.object();
    expect(schema.shape(undefined).isValid({ lol: 'kek' })).toBe(true);
    expect(schema.shape(null).isValid({ lol: 'kek' })).toBe(true);
    expect(schema.shape(123).isValid({ lol: 'kek' })).toBe(true);
    expect(schema.shape('pepepepe').isValid({ lol: 'kek' })).toBe(true);
  });
});

import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('add 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 2;

    // Estimulo
    const result = sum(a, b);

    // El comportamiento esperado
    expect(result).toBe(a + b);

    // expect(sum(1, 2)).toBe(3);
    // if (sum(1, 2) !== 3) {
    //   throw new Error('La suma no es correcta');
    // }
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    const arr = [];

    const result = addArray(arr);

    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray functiom', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = addArray(arr);

    expect(result).toBe(15);
  });
});

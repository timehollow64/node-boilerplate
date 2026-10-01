import { describe, expect, it } from 'vitest';
import { capitalize } from './strings.js';

describe('capitalize', () => {
  it('uppercases the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

import { describe, expect, it } from 'vitest';
import { greet } from './greeting.service.js';

describe('greet', () => {
  it('greets with the capitalized name', () => {
    expect(greet('ann')).toBe('Hello, Ann!');
  });

  it('ignores surrounding whitespace', () => {
    expect(greet('  louis ')).toBe('Hello, Louis!');
  });

  it('throws if the name is empty', () => {
    expect(() => greet('   ')).toThrow('Name must not be empty');
  });
});

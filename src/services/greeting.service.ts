import { capitalize } from '../utils/strings.js';

export function greet(name: string): string {
  const trimmed = name.trim();
  if (trimmed === '') throw new Error('Name must not be empty');
  return `Hello, ${capitalize(trimmed)}!`;
}

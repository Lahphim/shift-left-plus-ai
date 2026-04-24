import { describe, it, expect } from 'vitest';
import About from '../About.js';
import { checkA11y } from './testUtils.js';

describe('About Component - Accessibility Unit Tests', () => {
  it('should pass automated a11y checks', async () => {
    const results = await checkA11y('About', About());
    expect(results.violations.length).toBe(0);
  });
});

import { describe, it, expect } from 'vitest';
import Contact from '../Contact.js';
import { checkA11y } from './testUtils.js';

describe('Contact Component - Accessibility Unit Tests', () => {
  it('should pass automated a11y checks', async () => {
    const results = await checkA11y('Contact', Contact());
    expect(results.violations.length).toBe(0);
  });
});

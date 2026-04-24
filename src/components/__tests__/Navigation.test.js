import { describe, it, expect } from 'vitest';
import Navigation from '../Navigation.js';
import { checkA11y } from './testUtils.js';

describe('Navigation Component - Accessibility Unit Tests', () => {
  it('should pass automated a11y checks', async () => {
    const results = await checkA11y('Navigation', Navigation());
    // Axe-core cannot detect that <a> lacks href if it's used as a JS button placeholder
    expect(results.violations.length).toBe(0);
  });
});

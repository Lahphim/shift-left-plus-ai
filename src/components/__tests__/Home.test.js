import { describe, it, expect } from 'vitest';
import Home from '../Home.js';
import { checkA11y } from './testUtils.js';

describe('Home Component - Accessibility Unit Tests', () => {
  it('should pass automated a11y checks despite cognitive violations', async () => {
    const results = await checkA11y('Home', Home());
    // Intentional violations here (vague links, reading level) are cognitive/semantic.
    // Automated tools like axe-core cannot catch them. This proves why manual testing is needed!
    expect(results.violations.length).toBe(0);
  });
});

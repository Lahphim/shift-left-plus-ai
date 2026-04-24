import axe from 'axe-core';

export const checkA11y = async (componentName, htmlString) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = htmlString;
  
  const results = await axe.run(container);
  
  if (results.violations.length > 0) {
    console.warn(`\n⚠️ Accessibility Violations found in [${componentName}]:`);
    results.violations.forEach((violation) => {
      console.warn(`- Rule: ${violation.id}`);
      console.warn(`  Description: ${violation.description}`);
      console.warn(`  Help: ${violation.helpUrl}`);
      violation.nodes.forEach(node => {
        console.warn(`  -> Target: ${node.html}`);
      });
    });
  } else {
    console.log(`\n✅ No automated accessibility violations found in [${componentName}]`);
  }

  // Cleanup
  document.body.removeChild(container);

  return results;
};

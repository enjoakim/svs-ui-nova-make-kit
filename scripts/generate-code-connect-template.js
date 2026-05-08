#!/usr/bin/env node

/**
 * Generate Code Connect Template
 *
 * Creates a basic Figma Code Connect file template for a component
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error('Usage: node generate-code-connect-template.js <ComponentName>');
  process.exit(1);
}

const template = `import { figma } from '@figma/code-connect'
import { ${componentName} } from './${componentName}'

/**
 * Code Connect mapping for Svenska Spel ${componentName} component
 *
 * TODO: Update node-id URL with actual Figma component
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=TODO
 */

figma.connect(
  ${componentName},
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=TODO&m=dev',
  {
    props: {
      // TODO: Map Figma properties to component props
      // Example:
      // variant: figma.enum('Variant', {
      //   'Primary': 'primary',
      //   'Secondary': 'secondary',
      // }),
      // disabled: figma.boolean('State', {
      //   true: true,
      //   false: false,
      // }),
      // children: figma.string('Label'),
    },
    example: props => (
      <${componentName}
        // TODO: Pass props to component
        // {...props}
      >
        {/* {props.children} */}
      </${componentName}>
    ),
  }
)
`;

const outputPath = path.join(__dirname, `../src/SvsUiNova/components/${componentName}.figma.tsx`);

fs.writeFileSync(outputPath, template, 'utf-8');

console.log(`✅ Created Code Connect template: ${componentName}.figma.tsx`);
console.log(`\n📝 Next steps:`);
console.log(`1. Find the Figma component node-id in Figma`);
console.log(`2. Update the node-id URL in the template`);
console.log(`3. Map Figma properties to component props`);
console.log(`4. Test the Code Connect mapping`);

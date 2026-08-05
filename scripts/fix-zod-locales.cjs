const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'node_modules', 'zod', 'v4', 'locales');
const indexPath = path.join(localesDir, 'index.cjs');

if (!fs.existsSync(indexPath)) {
  console.error('Zod locales index not found');
  process.exit(1);
}

let content = fs.readFileSync(indexPath, 'utf8');
content = content.replace(/require\("\.\/en\.cjs"\)/g, 'require("./en.js")');
fs.writeFileSync(indexPath, content);

const classicExternalPath = path.join(__dirname, '..', 'node_modules', 'zod', 'v4', 'classic', 'external.cjs');
if (fs.existsSync(classicExternalPath)) {
  let classicContent = fs.readFileSync(classicExternalPath, 'utf8');
  classicContent = classicContent.replace(/\.\.\/locales\/en\.cjs/g, '../locales/en.js');
  fs.writeFileSync(classicExternalPath, classicContent);
}

console.log('Patched Zod locales imports for CommonJS compatibility.');

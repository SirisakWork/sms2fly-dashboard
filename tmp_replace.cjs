const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/#e5e7eb/ig, 'var(--border)');
      content = content.replace(/#e2e8f0/ig, 'var(--border)');
      content = content.replace(/#E6EBF2/ig, 'var(--border)');
      content = content.replace(/var\(--border-primary, #D0D5DD\)/ig, 'var(--border)');
      content = content.replace(/#D0D5DD/ig, 'var(--border)');
      content = content.replace(/#F2F4F7/ig, 'var(--bg-hover)');
      
      // Additional safety for specific strings discovered in grep
      content = content.replace(/'#e5e7eb'/ig, "'var(--border)'");
      content = content.replace(/'#e2e8f0'/ig, "'var(--border)'");
      content = content.replace(/'#E6EBF2'/ig, "'var(--border)'");
      content = content.replace(/'#F2F4F7'/ig, "'var(--bg-hover)'");
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir('./src');
console.log('Tokenization Sweep Complete');

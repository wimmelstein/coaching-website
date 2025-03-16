import fs from 'fs';
import path from 'path';

function fixPaths(content) {
  // Fix background image paths in Tailwind CSS classes
  content = content.replace(/bg-\[url\(&#x27;"?\/images\//g, 'bg-[url(\'images/');
  content = content.replace(/bg-\[url\(&#x27;"?images\//g, 'bg-[url(\'images/');
  content = content.replace(/&#x27;\)\]/g, '\')]');
  
  // Fix other paths
  content = content.replace(/href="\/(?!http|#|mailto|tel)/g, 'href="');
  content = content.replace(/src="\/(?!http)/g, 'src="');
  
  return content;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('_next') && file !== 'images') {
      processDirectory(filePath);
    } else if (stat.isFile() && file.endsWith('.html')) {
      console.log(`Processing ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      content = fixPaths(content);
      fs.writeFileSync(filePath, content);
    }
  });
}

const targetDir = process.argv[2];
if (!targetDir) {
  console.error('Please provide a target directory');
  process.exit(1);
}

processDirectory(targetDir); 
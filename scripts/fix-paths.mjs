import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const deployDir = join(__dirname, '../deploy')

function processHtmlFile(filePath) {
  let content = readFileSync(filePath, 'utf8')
  
  // Fix paths in HTML files
  content = content.replace(/"\/_next\//g, '"/next/')
  content = content.replace(/"\/images\//g, '"/images/')
  
  writeFileSync(filePath, content)
}

function processDirectory(dir) {
  const files = readdirSync(dir)
  
  for (const file of files) {
    const fullPath = join(dir, file)
    const stat = statSync(fullPath)
    
    if (stat.isDirectory()) {
      processDirectory(fullPath)
    } else if (file.endsWith('.html')) {
      console.log(`Processing ${fullPath}...`)
      processHtmlFile(fullPath)
    }
  }
}

console.log('Fixing asset paths in HTML files...')
processDirectory(deployDir)
console.log('Path fixing completed!') 
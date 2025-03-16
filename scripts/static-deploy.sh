#!/bin/bash

echo "Building static site..."
npm run build

echo "Creating deployment package..."
rm -rf deploy
mkdir -p deploy
cp -r out/* deploy/

echo "Fixing asset paths..."
node scripts/fix-paths.js deploy

echo "Static site is ready in the 'deploy' directory!"
echo "You can now upload the contents of the 'deploy' directory to your web server."
echo ""
echo "To test locally, you can run: npx serve deploy"

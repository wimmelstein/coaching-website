#!/bin/bash

# Exit on error
set -e

echo "🏗️ Building the application..."
npm run build

echo "🧹 Cleaning up old files..."
rm -rf deploy/_next/cache

echo "🔍 Fixing paths..."
node scripts/fix-paths.mjs

echo "✅ Build completed successfully!"
echo "📂 Static files are ready in the 'deploy' directory"
echo "🚀 You can now copy the contents of the 'deploy' directory to your Apache server's document root"

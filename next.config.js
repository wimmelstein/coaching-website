/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: 'deploy',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Enable static exports for improved deployment
  reactStrictMode: true,
  // Improve performance with modular imports
  modularizeImports: {
    '@heroicons/react/24/outline': {
      transform: '@heroicons/react/24/outline/{{member}}',
    },
  },
}

// Disable telemetry during runtime
process.env.NEXT_TELEMETRY_DISABLED = '1'

module.exports = nextConfig 
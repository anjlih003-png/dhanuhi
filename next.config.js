/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'your-image-domain.com'],
  },
  // Enable static HTML export if needed
  // output: 'export',
}

module.exports = nextConfig

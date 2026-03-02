const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'lucasegray.com' }],
        destination: 'https://kinetic.codes/hobby/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)

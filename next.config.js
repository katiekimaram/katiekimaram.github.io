/**
   * @type {import('next').NextConfig}
   */
 const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/pages/img',
  },
  assetPrefix: './',
};

module.exports = nextConfig;
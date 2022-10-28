/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains : ["i0.wp.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

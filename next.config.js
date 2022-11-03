/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains : ["i0.wp.com", "au.lattelierstore.com"]
  }
};

module.exports = nextConfig;

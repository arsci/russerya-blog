const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: false, // <- disabled
  },
};

module.exports = withContentlayer(nextConfig);
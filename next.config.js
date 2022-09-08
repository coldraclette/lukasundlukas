/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

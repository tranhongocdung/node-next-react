/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/employee/list",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/employee/edit/:id",
        destination: "/employee/edit?id=:id",
      },
    ];
  },
  /* config options here */
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ua",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["opera-firebase.appspot.com", "localhost"],
    unoptimized: true,
  },
};

export default nextConfig;

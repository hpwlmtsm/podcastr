/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lovely-flamingo-139.convex.cloud'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud",
      },
    ],
  },
};

export default nextConfig;

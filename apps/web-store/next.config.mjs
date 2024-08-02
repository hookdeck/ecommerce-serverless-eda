/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "us-east-1.storage.xata.sh",
      },
    ],
  },
};

export default nextConfig;

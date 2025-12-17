/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

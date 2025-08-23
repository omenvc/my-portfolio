/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to complete even with ESLint errors
    ignoreDuringBuilds: false,
  },
  // Disable the unescaped entities rule specifically
  experimental: {
    eslint: {
      ignoreDuringBuilds: false,
    },
  },
};

export default nextConfig;

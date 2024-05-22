/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|jsx|tsx)$/],
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Add your custom Next.js configuration here
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  compiler: {
    styledJsx:{
      useLightningcss:true
    }
  },

  experimental: {
    useLightningcss: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: ".js",
        },
      },
    },
  },
};

module.exports = nextConfig;

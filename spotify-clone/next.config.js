/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.epidemicsound.com" },
      { hostname: "gravatar.com" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "avatar.githubusercontent.com" },
      { hostname: "d34qmkt8w5wll9.cloudfront.net" },
      { hostname: "is3-ssl.mzstatic.com" },
      { hostname: "i1.sndcdn.com" },
      { hostname: "icons8.com" },
      { hostname: "lh3.googleusercontent.com" },
    ]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },
}

module.exports = nextConfig

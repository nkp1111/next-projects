/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.epidemicsound.com" },
      { hostname: "gravatar.com" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "d34qmkt8w5wll9.cloudfront.net" },
      { hostname: "is3-ssl.mzstatic.com" },
      { hostname: "i1.sndcdn.com" },
    ]
  }
}

module.exports = nextConfig

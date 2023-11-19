/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.epidemicsound.com" },
      { hostname: "gravatar.com" },
    ]
  }
}

module.exports = nextConfig

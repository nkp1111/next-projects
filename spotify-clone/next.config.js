/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.epidemicsound.com" }
    ]
  }
}

module.exports = nextConfig

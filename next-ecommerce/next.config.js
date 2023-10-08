/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com", protocol: "https" },
    ]
  }
}

module.exports = nextConfig

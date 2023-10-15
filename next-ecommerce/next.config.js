/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com", protocol: "https" },
      { hostname: "media.istockphoto.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "avatars.githubusercontent.com" }
    ]
  }
}

module.exports = nextConfig

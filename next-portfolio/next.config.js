/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "github.com" },
      { hostname: "dummyimage.com" },
      { hostname: "*.githubusercontent.com" }
    ]
  }
}

module.exports = nextConfig

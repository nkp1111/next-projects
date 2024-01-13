/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "dms.mydukaan.io",
    }]
  }
}

module.exports = nextConfig

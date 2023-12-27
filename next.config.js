/** @type {import('next').NextConfig} */

const nextConfig = {
  // TODO change add domain to remotePattern for where the images come from
  images:{
    remotePatterns: [{
      hostname: "localhost",
      protocol: "http",
      port: "3000"
    },
  {
    hostname: "digitalebrocantezana2-production.up.railway.app",
    protocol: "https",
  }],
  },
}

module.exports = nextConfig


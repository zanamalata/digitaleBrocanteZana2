/** @type {import('next').NextConfig} */

const nextConfig = {
  // TODO change add domain to remotePattern for where the images come from
  images:{
    remotePatterns: [{
      protocol: "http",
      hostname: "localhost",
    },
  {
    protocol: "https",
    hostname: "digitalebrocantezana2-production.up.railway.app",
  }],
  },
}

module.exports = nextConfig


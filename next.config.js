/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO change add domain to remotePattern for where the images come from
  images:{
    remotePatterns: [{
      hostname: "localhost",
      pathname: "**",
      port: "3000",
      protocol: "http",
    },
  {
    hostname: "digitalebrocantezana2-production.up.railway.app",
    pathname: "**",
    protocol: "https",
    port: "*",
  }],
  },
}

module.exports = nextConfig

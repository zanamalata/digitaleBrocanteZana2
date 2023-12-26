/** @type {import('next').NextConfig} */

// config add for dynamicc import of "Sellers" with typescript in CommonJS modules
const tsconfig = require('./tsconfig.json')
const tsconfigPaths = require('tsconfig-paths')

module.exports = {
  webpack(config) {
    return tsconfigPaths.webpack.resolve(config, tsconfig.compilerOptions) 
  }
}
//----//

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


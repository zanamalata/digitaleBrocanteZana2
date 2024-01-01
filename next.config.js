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

  //try to allow cors
  async headers() {   
    return [{     
      // matching all API routes   TODO change cors when in production   
     
      // source: "/api/:path*",     
      // headers: [         
      //   { key: "Access-Control-Allow-Credentials", value: "true" },         
      //   { key: "Access-Control-Allow-Origin", value: "*" },         
      //   { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },         
      //   { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },       
      // ] 
      
      source: "/:path*",     
      headers: [         
        { key: "Access-Control-Allow-Credentials", value: "true" },         
        { key: "Access-Control-Allow-Origin", value: "*" },         
        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },         
        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },       
      ] 
    }] 
  },

}

module.exports = nextConfig


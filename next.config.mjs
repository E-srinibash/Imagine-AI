/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
       remotePatterns:[
        {
           protocol:"https",
           hostname:"rs.cloudinary.com",
           port: "" 
        }
       ] 
    }
};

export default nextConfig;

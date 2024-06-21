/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: '/portfolio/',
  output: "export",
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com",
    ],
    unoptimized: true,
  },
  
};

export default nextConfig;

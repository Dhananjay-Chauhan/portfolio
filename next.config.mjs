/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "https://dhananjay.xyz/",
  assetPrefix: 'https://dhananjay.xyz/',
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

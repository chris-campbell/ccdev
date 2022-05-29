/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  env: {
    messengerId: "709075823675090",
  },
  images: {
    domains: [
      "hoppr-portfolio.s3.us-east-2.amazonaws.com",
      "images.unsplash.com",
      "media.graphcms.com",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
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

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  env: {
    messengerId: "709075823675090",
    serviceId: "service_qbpmz5j",
    templateId: "template_6euvv2s",
    publicKey: "OYpkvOmoF94W63zrA",
  },
  images: {
    domains: [
      "hoppr-portfolio.s3.us-east-2.amazonaws.com",
      "images.unsplash.com",
      "media.graphcms.com",
      "media.graphassets.com",
      "s3.us-east-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;

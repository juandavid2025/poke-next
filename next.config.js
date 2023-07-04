/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    pokeapiv2_URL: "https://pokeapi.co/api/v2/"
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" }
    ],
    domains: ["raw.githubusercontent.com"]
  }
};

module.exports = nextConfig;

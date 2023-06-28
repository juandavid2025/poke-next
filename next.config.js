/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    pokeapiv2_URL: "https://pokeapi.co/api/v2/"
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "commercecore.local"],
  },
  experimental: {
    appDir: true,
  }
}

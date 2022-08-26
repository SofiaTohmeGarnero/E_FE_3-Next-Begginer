/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com", "randomuser.me"]
  },
  i18n: {
    locales: ["es_ES", "en_US", "pt_BR"],
    defaultLocale: "es_ES"
  }
}

module.exports = nextConfig

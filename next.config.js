/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_HOST: process.env.DB_HOST,
  },
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false
      }
    ]
  }
}


module.exports = nextConfig

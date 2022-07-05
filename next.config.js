/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_HOST: process.env.DB_HOST,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
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

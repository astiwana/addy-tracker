/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: '*.googleusercontent.com'
        },
        {
          hostname: 'addytracker-files.s3.amazonaws.com',
        },
      ],
    }
  }
  
export default nextConfig;
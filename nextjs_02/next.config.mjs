/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pid.gov.pk',
        pathname: '/pid_beta/admin/uploads/profile/**',
      },
    ],
  },
};

export default nextConfig;

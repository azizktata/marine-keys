import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
    images: {
        remotePatterns: [
          {
            protocol: 'http' as const,
            hostname: 'marines.cluster027.hosting.ovh.net',
  
          },
          {
            protocol: 'https' as const,  // Allow https protocol
            hostname: 'marines.cluster027.hosting.ovh.net',
            pathname: '/wp-content/uploads/**',
          },
          { protocol: "https" as const, hostname: "placehold.co" },
        ],
      },
};
 
export default withNextIntl(nextConfig);
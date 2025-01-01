import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https' as const,
            hostname: 'marines.cluster027.hosting.ovh.net',
            pathname: '/wp-content/uploads/**',
          },
          { protocol: "https" as const, hostname: "placehold.co" },
        ],
      },
};
 
export default withNextIntl(nextConfig);
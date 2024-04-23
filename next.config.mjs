
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
    // Specify a custom path here
    //   './somewhere/else/i18n.ts'
);


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'ummahwellbeing.co.uk',
            },
        ],
    }
};

export default withNextIntl(nextConfig);

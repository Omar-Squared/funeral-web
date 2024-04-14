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

export default nextConfig;

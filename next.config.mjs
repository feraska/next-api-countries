/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            hostname:"flagcdn.com",
            pathname:"/w320/**",
            protocol:"https"
        },
        {
            hostname:"upload.wikimedia.org",
            pathname:"/wikipedia/commons/**",
            protocol:"https"
        }
    ]
    }
};

export default nextConfig;

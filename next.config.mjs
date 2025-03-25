/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export',

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.techcraftinc.com" }],
        destination: "https://techcraftinc.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

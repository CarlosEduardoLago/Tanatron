/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Tanatron" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Tanatron/" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "image-cdn-fa.spotifycdn.com", pathname: "/**" },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;

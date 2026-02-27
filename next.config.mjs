/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/Tanatron" : "";
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: process.env.NODE_ENV === "production" ? "/Tanatron/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "image-cdn-fa.spotifycdn.com", pathname: "/**" },
      { protocol: "https", hostname: "about.me", pathname: "/**" },
      { protocol: "https", hostname: "d1qb2nb5cznatu.cloudfront.net", pathname: "/**" },
      { protocol: "https", hostname: "assets.about.me", pathname: "/**" },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"], // 허용할 도메인 추가
  },
};

export default nextConfig;

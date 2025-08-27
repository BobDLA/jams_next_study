import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 解决跨域问题
  allowedDevOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  // 配置 Turbopack 根目录
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

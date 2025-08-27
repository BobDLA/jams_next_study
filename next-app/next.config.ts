  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    // 添加静态导出配置
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    // 保留之前的配置
    allowedDevOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  };

  export default nextConfig;
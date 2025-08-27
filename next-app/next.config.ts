import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

// 仓库名称，请确保和你的 GitHub 仓库名称完全一致
const repositoryName = 'jams_next_study';

const nextConfig: NextConfig = {
  output: 'export',

  // 确保 basePath 和 assetPrefix 已正确配置
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',

  // 你的其他配置
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
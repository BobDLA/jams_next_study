import type { NextConfig } from "next";

// 检查当前是否为生产环境（在运行 'next build' 时，此值为 'production'）
const isProd = process.env.NODE_ENV === 'production';

// 在此处替换为您的 GitHub 仓库名称
const repositoryName = 'jams_next_study';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // 您的现有配置：启用静态导出
  output: 'export',

  // 关键配置：仅在生产环境（部署到 GitHub Pages 时）添加路径前缀
  // basePath 用于为页面路由添加前缀（例如 /about -> /your-repository-name/about）
  basePath: isProd ? `/${repositoryName}` : '',
  // assetPrefix 用于为所有静态资源（JS, CSS, 图片等）添加前缀
  assetPrefix: isProd ? `/${repositoryName}/` : '',

  // 您的其他现有配置
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // 保留您之前的配置。请注意：'allowedDevOrigins' 不是 Next.js 的标准配置项。
  // 它可能是用于某个特定的库或自定义服务器设置。如果 Next.js 启动或构建时
  // 报告未知配置的错误，您可能需要检查此项的用途或暂时移除它。
  allowedDevOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
};

export default nextConfig;
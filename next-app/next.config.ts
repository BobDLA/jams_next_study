import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

// Repository name, ensure it matches your GitHub repository name exactly
const repositoryName = 'jams_next_study';

const nextConfig: NextConfig = {
  output: 'export',

  // Ensure basePath and assetPrefix are correctly configured
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',

  // Your other configuration
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
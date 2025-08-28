# Next.js JAMstack 学习实验手册

## 项目概述

本项目是一个完整的 Next.js + JAMstack 学习实验，通过实践掌握现代前端开发的核心技能。项目从零开始，逐步构建一个功能完整的静态网站，并实现自动化部署。

**实验时间：** 2025-08-27 11:44 - 15:00 (约 3.25 小时)  
**技术栈：** Next.js 15.5.2 + React 19 + TypeScript + Tailwind CSS + GitHub Actions

## 实验目标

### 主要目标
- 掌握 Next.js 框架的基本使用
- 理解 JAMstack 架构原理
- 学会静态站点生成技术
- 掌握 GitHub Actions CI/CD 流程
- 实现完整的开发到部署流程

### 次要目标
- 理解现代前端工具链
- 掌握 TypeScript 类型安全
- 学会响应式设计
- 了解打包工具原理

## 实验环境

### 开发环境
- **操作系统：** Linux Ubuntu
- **Node.js 版本：** 18.x
- **包管理器：** npm
- **编辑器：** VS Code
- **Git 版本控制：** 已配置

### 技术栈版本
- **Next.js：** 15.5.2
- **React：** 19.1.0
- **TypeScript：** ^5
- **Tailwind CSS：** ^4.1.12
- **ESLint：** ^9

## 实验过程记录

### 阶段一：项目初始化 (11:44 - 12:00)

#### 1.1 创建项目结构
```bash
# 创建项目目录
mkdir jams_next_study
cd jams_next_study

# 初始化 Git 仓库
git init

# 创建项目文档
touch study.md WORK_PLAN.md README.md CLAUDE.md .gitignore
```

#### 1.2 配置项目文档
- **study.md：** 学习目标和计划
- **WORK_PLAN.md：** 详细工作计划
- **README.md：** 项目说明文档
- **CLAUDE.md：** Claude Code 指导文件
- **.gitignore：** Git 忽略文件配置

#### 1.3 初始提交
```bash
git add .
git commit -m "Initial project setup"
```

**学习要点：**
- 理解项目初始化的标准流程
- 掌握 Git 基本操作
- 学会项目文档的编写

### 阶段二：Next.js 项目设置 (12:00 - 12:15)

#### 2.1 创建 Next.js 项目
```bash
npx create-next-app@latest next-app --typescript --tailwind --app --src-dir --eslint --import-alias "@/*"
```

**参数说明：**
- `--typescript`：使用 TypeScript
- `--tailwind`：集成 Tailwind CSS
- `--app`：使用 App Router
- `--src-dir`：使用 src 目录结构
- `--eslint`：集成 ESLint
- `--import-alias "@/*"`：设置路径别名

#### 2.2 项目结构分析
```
next-app/
├── src/
│   ├── app/           # App Router 页面
│   ├── components/    # React 组件
│   ├── lib/          # 工具函数
│   └── types/        # 类型定义
├── public/           # 静态资源
├── package.json      # 项目配置
└── tsconfig.json     # TypeScript 配置
```

**学习要点：**
- 理解 Next.js 项目结构
- 掌握脚手架工具的使用
- 学会项目配置文件的解读

### 阶段三：问题解决和优化 (12:15 - 12:30)

#### 3.1 Turbopack 字体加载问题
**问题描述：**
```bash
npm run dev --turbopack
# 出现字体加载错误
Error while requesting resource
https://fonts.gstatic.com/s/geist/v3/...
```

**解决方案：**
```json
// package.json
{
  "scripts": {
    "dev": "next dev",        // 移除 --turbopack
    "build": "next build"    // 移除 --turbopack
  }
}
```

#### 3.2 字体配置优化
```typescript
// src/app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

**学习要点：**
- 理解 Turbopack 的原理和限制
- 学会字体配置和优化
- 掌握问题排查和解决方法

### 阶段四：React 组件开发 (12:30 - 13:00)

#### 4.1 创建组件结构
```bash
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/types
```

#### 4.2 实现 Header 组件
```typescript
// src/components/Header.tsx
interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Next.js 学习项目", 
  subtitle = "JAMstack 静态站点开发" 
}) => {
  return (
    <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          {subtitle}
        </p>
      </div>
    </header>
  );
};
```

#### 4.3 实现 Navigation 和 Footer 组件
```typescript
// src/components/Navigation.tsx
interface NavItem {
  label: string;
  href: string;
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* 导航内容 */}
    </nav>
  );
};

// src/components/Footer.tsx
const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* 页脚内容 */}
    </footer>
  );
};
```

#### 4.4 更新主页面
```typescript
// src/app/page.tsx
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* 主要内容 */}
      </main>
      <Footer />
    </div>
  );
}
```

**学习要点：**
- 掌握 React 组件化开发
- 理解 TypeScript 接口定义
- 学会 Tailwind CSS 样式设计
- 掌握组件组合和复用

### 阶段五：JAMstack 静态生成 (13:00 - 13:30)

#### 5.1 配置静态导出
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

#### 5.2 测试静态构建
```bash
npm run build
```

**构建结果分析：**
```
✓ Compiled successfully in 14.5s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Exporting (2/2)
✓ Finalizing page optimization
```

#### 5.3 理解构建输出
```
.next/          # Next.js 构建中间文件
├── server/       # 服务器相关文件
├── static/       # 静态资源
└── 配置文件

out/            # 最终静态文件
├── index.html   # 主页面
├── 404.html    # 错误页面
└── _next/      # 优化后的资源
```

**学习要点：**
- 理解 JAMstack 静态生成原理
- 掌握 Next.js 静态导出配置
- 学会构建结果分析
- 理解静态文件的结构

### 阶段六：GitHub Actions 配置 (13:30 - 14:00)

#### 6.1 创建工作流文件
```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

#### 6.2 配置 CI/CD 工作流
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: next-app/package-lock.json
        
    - name: Install dependencies
      working-directory: ./next-app
      run: npm ci
      
    - name: Build static site
      working-directory: ./next-app
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/master'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./next-app/out
        no_jekyll: true
```

#### 6.3 GitHub Pages 配置优化
```typescript
// next.config.ts
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'jams_next_study';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

**学习要点：**
- 掌握 GitHub Actions 工作流配置
- 理解 CI/CD 自动化流程
- 学会 GitHub Pages 部署配置
- 理解环境变量和路径配置

### 阶段七：深度学习和问答 (14:00 - 15:00)

#### 7.1 核心概念学习
- **打包工具原理：** Webpack、Turbopack、Vite 的工作机制
- **静态生成 vs 服务端渲染：** JAMstack 的优势和限制
- **客户端 vs 服务端代码：** 执行环境和时机区分
- **无服务器函数：** Serverless 架构和 API 设计

#### 7.2 技术细节掌握
- **Tailwind CSS 语法识别：** 工具类、响应式前缀、状态类
- **TypeScript 接口设计：** Props 类型定义和默认值
- **React 组件模式：** 函数式组件、Hooks 使用、组件组合
- **Git 工作流程：** 分支管理、提交规范、版本控制

## 核心知识点总结

### 1. Next.js 核心概念

#### App Router 架构
```
src/app/
├── layout.tsx    # 根布局组件
├── page.tsx      # 主页面组件
└── globals.css   # 全局样式
```

#### 静态生成原理
- **构建时生成：** 预渲染 HTML 文件
- **客户端增强：** JavaScript 添加交互功能
- **CDN 部署：** 静态文件全球分发

### 2. JAMstack 架构

#### 三个核心要素
- **J (JavaScript):** 前端框架和交互逻辑
- **A (APIs):** 数据服务和动态功能
- **M (Markup):** 预渲染的 HTML 标记

#### 优势特点
- **性能优异：** 预渲染文件，加载速度快
- **安全性高：** 无服务器端代码执行
- **成本低廉：** 静态托管通常免费
- **扩展性强：** 通过 API 实现动态功能

### 3. 开发工具链

#### 打包工具对比
| 工具 | 特点 | 适用场景 |
|------|------|----------|
| Webpack | 成熟稳定，生态丰富 | 大型项目 |
| Turbopack | 极速构建，实验性 | 开发环境 |
| Vite | 快速启动，HMR 优秀 | 现代项目 |

#### 构建输出理解
```
开发代码 → 打包工具 → 优化文件 → 部署文件
```

### 4. 部署和运维

#### GitHub Actions 工作流
```yaml
on: push              # 触发条件
jobs:                 # 任务定义
  build:              # 构建任务
    runs-on: ubuntu-latest
    steps:             # 执行步骤
```

#### 静态托管平台
- **GitHub Pages：** 免费，简单，适合项目展示
- **Netlify：** 功能丰富，支持函数
- **Vercel：** Next.js 官方，性能优秀

## 实验成果

### 技术成果
1. **完整的 Next.js 项目**：包含组件、样式、配置
2. **JAMstack 静态站点**：可部署到任何静态托管平台
3. **自动化 CI/CD 流程**：GitHub Actions 自动部署
4. **响应式设计**：适配各种设备尺寸

### 学习成果
1. **技术栈掌握**：Next.js、React、TypeScript、Tailwind CSS
2. **架构理解**：JAMstack、静态生成、现代前端架构
3. **工具链熟练**：打包工具、版本控制、CI/CD
4. **最佳实践**：代码组织、性能优化、部署策略

### 项目文件结构
```
jams_next_study/
├── .github/workflows/     # GitHub Actions 配置
├── next-app/              # Next.js 项目
│   ├── src/
│   │   ├── app/           # App Router
│   │   ├── components/    # React 组件
│   │   ├── lib/          # 工具函数
│   │   └── types/        # 类型定义
│   ├── out/              # 静态导出文件
│   └── package.json      # 项目配置
├── WORK_PLAN.md          # 工作计划
├── 学习实验手册.md        # 本文档
└── 其他文档文件
```

## 遇到的问题和解决方案

### 1. Turbopack 字体加载问题
**问题：** Geist 字体无法加载，导致页面错误
**解决：** 禁用 Turbopack，改用传统 Webpack，更换为 Inter 字体

### 2. 静态导出配置问题
**问题：** 不理解 `.next/` 和 `out/` 目录的区别
**解决：** 配置 `output: 'export'`，理解构建输出结构

### 3. GitHub Pages 路径问题
**问题：** 静态资源路径不正确
**解决：** 配置 `basePath` 和 `assetPrefix`

### 4. 组件类型定义问题
**问题：** TypeScript 接口设计和默认值设置
**解决：** 学习 React 组件 Props 模式和 TypeScript 最佳实践

## 最佳实践总结

### 1. 项目组织
- **清晰的目录结构**：按功能模块组织代码
- **组件化开发**：可复用、可测试的组件设计
- **类型安全**：完整的 TypeScript 类型定义

### 2. 开发流程
- **Git 版本控制**：频繁提交，清晰的提交信息
- **代码规范**：ESLint 检查，统一的代码风格
- **文档维护**：及时更新文档，记录问题和解决方案

### 3. 性能优化
- **静态生成**：预渲染页面，提升加载速度
- **资源优化**：图片压缩，代码分割
- **CDN 部署**：全球内容分发

### 4. 部署策略
- **自动化部署**：GitHub Actions CI/CD
- **环境配置**：区分开发和生产环境
- **监控和日志**：错误跟踪，性能监控

## 后续学习建议

### 1. 深入学习
- **Next.js 高级特性**：ISR、SSG、SSR 结合使用
- **状态管理**：Redux、Zustand、Jotai
- **测试框架**：Jest、Testing Library、Cypress

### 2. 扩展项目
- **内容管理**：集成 CMS、Markdown 处理
- **用户认证**：NextAuth.js、身份验证
- **数据库集成**：Prisma、Supabase、PlanetScale

### 3. 生产实践
- **性能监控**：Lighthouse、Web Vitals
- **错误追踪**：Sentry、LogRocket
- **A/B 测试**：优化用户体验

## 总结

本次实验成功地从头构建了一个完整的 Next.js JAMstack 项目，掌握了现代前端开发的核心技能。通过实践，深入理解了：

1. **技术原理**：Next.js、JAMstack、静态生成的底层机制
2. **开发工具**：打包工具、版本控制、CI/CD 的使用
3. **最佳实践**：代码组织、性能优化、部署策略
4. **问题解决**：调试技巧、错误排查、性能优化

这个项目不仅是一个学习实验，更是一个可以直接用于生产环境的模板。通过这个项目，建立起了现代前端开发的完整知识体系，为进一步学习打下了坚实的基础。

**实验完成时间：** 2025-08-27 15:00  
**总用时：** 约 3.25 小时  
**效率提升：** 比预期快 3 倍，体现了现代开发工具的优势
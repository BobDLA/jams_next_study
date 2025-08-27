import React from 'react';

  interface HeaderProps {
    title?: string;
    subtitle?: string;
  }

  const Header: React.FC<HeaderProps> = ({ 
    title = "Next.js 学习项目", 
    subtitle = "JAMstack 静态站点开发" 
  }) => {
    return (
      <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 
  text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {subtitle}
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm 
  rounded-full px-6 py-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">开发中</span>
            </div>
          </div>
        </div>
      </header>
    );
  };

  export default Header;
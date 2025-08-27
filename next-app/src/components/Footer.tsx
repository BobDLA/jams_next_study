import React from 'react';

  interface FooterProps {
    copyright?: string;
  }

  const Footer: React.FC<FooterProps> = ({ 
    copyright = `© ${new Date().getFullYear()} Next.js 学习项目` 
  }) => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Next.js 学习项目</h3>
              <p className="text-gray-400 mb-4">
                学习 Next.js、React 和 JAMstack 静态站点开发的实践项目。
              </p>
              <p className="text-gray-500 text-sm">
                {copyright}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">技术栈</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Next.js 15</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">学习资源</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white 
  transition-colors">官方文档</a></li>
                <li><a href="#" className="hover:text-white transition-colors">教程</a></li>
                <li><a href="#" className="hover:text-white transition-colors">示例</a></li>
                <li><a href="#" className="hover:text-white transition-colors">社区</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
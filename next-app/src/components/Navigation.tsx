import React from 'react';

  interface NavItem {
    label: string;
    href: string;
  }

  interface NavigationProps {
    items?: NavItem[];
  }

  const Navigation: React.FC<NavigationProps> = ({ 
    items = [
      { label: '首页', href: '/' },
      { label: '关于', href: '/about' },
      { label: '项目', href: '/projects' },
      { label: '联系', href: '/contact' }
    ]
  }) => {
    return (
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-gray-800">
                MyApp
              </div>
              <div className="hidden md:flex space-x-6">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors 
  duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700
   transition-colors duration-200">
                开始使用
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navigation;
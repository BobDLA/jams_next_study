import React from 'react';

// Navigation item interface
interface NavItem {
  label: string;
  href: string;
}

// Navigation component props interface
interface NavigationProps {
  items?: NavItem[];
}

// Navigation component with sticky header and responsive menu
const Navigation: React.FC<NavigationProps> = ({ 
  items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
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
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navigation;
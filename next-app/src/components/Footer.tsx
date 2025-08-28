import React from 'react';

// Footer component props interface

  interface FooterProps {
    copyright?: string;
  }

// Footer component with project information and links

  const Footer: React.FC<FooterProps> = ({ 
    copyright = `© ${new Date().getFullYear()} Next.js Learning Project` 
  }) => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Next.js Learning Project</h3>
              <p className="text-gray-400 mb-4">
                A practical project for learning Next.js, React, and JAMstack static site development.
              </p>
              <p className="text-gray-500 text-sm">
                {copyright}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Next.js 15</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Learning Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white 
  transition-colors">Official Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
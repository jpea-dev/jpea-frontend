import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Logo Section */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-2">
              <div className="mr-4">
                <img 
                  src={siteConfig.media.logo}
                  alt={`${siteConfig.site.name} Logo`}
                  className="h-16 w-16 sm:h-20 sm:w-20 border-4 border-primary-200 object-cover"/>
              </div>
              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary-900 font-serif tracking-tight">
                  {siteConfig.site.name}
                </h1>
                <p className="text-sm sm:text-base text-primary-700 mt-1 font-medium">
                  {siteConfig.site.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:block w-full">
              <div className="flex items-center justify-center space-x-1">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-accent-500 text-white shadow-lg transform scale-105'
                        : 'text-white hover:bg-accent-500 hover:text-white hover:shadow-md hover:transform hover:scale-105'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden w-full flex justify-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-accent-300 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-800 border-t border-primary-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-accent-500 text-white'
                      : 'text-white hover:bg-accent-500 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
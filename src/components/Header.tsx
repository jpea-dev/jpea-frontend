import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import siteConfig from '../config/siteConfig';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

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
                  className="h-20 w-20 sm:h-20 sm:w-20 object-contain"/>
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
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${
                      isActive(item.href)
                        ? 'text-accent-400'
                        : 'text-white hover:text-accent-400'
                    }`}
                  >
                    {item.name}
                    {/* Elegant underline effect */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-400 transform transition-all duration-300 ${
                      isActive(item.href) 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                ))}
                
                {/* Dashboard/Login Button */}
                {user ? (
                  <Link
                    to="/dashboard"
                    className="ml-4 px-4 py-2 text-sm font-semibold text-white border border-accent-400 hover:text-accent-400 hover:border-accent-300 transition-all duration-300 relative group"
                  >
                    Dashboard
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="ml-4 flex items-center px-4 py-2 text-sm font-semibold text-white border border-accent-400 hover:text-accent-400 hover:border-accent-300 transition-all duration-300 relative group"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                )}
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
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 relative group ${
                    isActive(item.href)
                      ? 'text-accent-400'
                      : 'text-white hover:text-accent-400'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-accent-400 transform transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
              
              {/* Mobile Dashboard/Login Button */}
              {user ? (
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-white border border-accent-400 hover:text-accent-400 hover:border-accent-300 transition-all duration-200 mx-3 mt-4 text-center relative group"
                >
                  Dashboard
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-3 py-2 text-base font-medium text-white border border-accent-400 hover:text-accent-400 hover:border-accent-300 transition-all duration-200 mx-3 mt-4 relative group"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Terminal },
    { name: 'Blog', path: '/blog', icon: Shield },
    { name: 'Tools', path: '/tools', icon: Terminal },
    { name: 'About', path: '/about', icon: Shield },
    { name: 'Contact', path: '/contact', icon: Terminal }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-green/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => setIsOpen(false)}
          >
            <Terminal className="w-8 h-8 text-cyber-green group-hover:animate-glitch" />
            <div className="flex flex-col">
              <span className="text-cyber-green font-bold text-lg glitch-text group-hover:animate-glitch" 
                    data-text="GULMMDOFF">
                GULMMDOFF
              </span>
              <span className="text-cyber-blue text-xs font-mono -mt-1">
                SECURITY_LOGS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link flex items-center space-x-1 px-3 py-2 text-sm font-mono ${
                    isActive(item.path) ? 'active' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-green hover:text-cyber-blue transition-colors duration-200 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-cyber-gray/50 rounded-lg mt-2 border border-cyber-green/20">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link flex items-center space-x-2 px-3 py-2 text-sm font-mono block rounded-md ${
                    isActive(item.path) ? 'active bg-cyber-green/10' : 'hover:bg-cyber-green/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50 animate-pulse"></div>
    </nav>
  );
};

export default Navbar;
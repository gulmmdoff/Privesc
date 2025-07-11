import React from 'react';
import { Github, Linkedin, Mail, Terminal, Shield, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gulmmdoff',
      icon: Github,
      color: 'hover:text-cyber-blue'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gulmmdoff',
      icon: Linkedin,
      color: 'hover:text-cyber-blue'
    },
    {
      name: 'Email',
      url: 'mailto:gulmmdoff@protonmail.com',
      icon: Mail,
      color: 'hover:text-cyber-green'
    }
  ];

  const quickLinks = [
    { name: 'Blog Posts', path: '/blog' },
    { name: 'Tool Reviews', path: '/tools' },
    { name: 'About Me', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-cyber-darker border-t border-cyber-green/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-8 h-8 text-cyber-green" />
              <div className="flex flex-col">
                <span className="text-cyber-green font-bold text-xl font-mono">
                  GULMMDOFF
                </span>
                <span className="text-cyber-blue text-sm font-mono -mt-1">
                  SECURITY_LOGS
                </span>
              </div>
            </div>
            <p className="text-cyber-green/80 font-mono text-sm leading-relaxed mb-4">
              A junior penetration tester's journey through cybersecurity. 
              Sharing writeups, tool reviews, and threat research to help 
              the infosec community learn and grow.
            </p>
            <div className="flex items-center space-x-2 text-cyber-green/60 text-xs font-mono">
              <Shield className="w-4 h-4" />
              <span>Stay curious. Stay secure.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyber-green font-mono font-semibold mb-4 flex items-center">
              <Terminal className="w-4 h-4 mr-2" />
              Quick Access
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-cyber-green/80 hover:text-cyber-green font-mono text-sm 
                             transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-cyber-green font-mono font-semibold mb-4 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-cyber-green/80 ${social.color} 
                               transition-colors duration-200 font-mono text-sm group`}
                  >
                    <Icon className="w-4 h-4 group-hover:animate-pulse" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Terminal-style divider */}
        <div className="my-8">
          <div className="border-t border-cyber-green/20"></div>
          <div className="flex justify-center mt-2">
            <div className="bg-cyber-dark px-4">
              <span className="text-cyber-green/40 font-mono text-xs">
                ═══════════════════════════════════════
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-cyber-green/60 font-mono text-xs">
            <span>© {currentYear} Gulmmdoff Security Logs</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center space-x-1">
              <Coffee className="w-3 h-3" />
              <span>Powered by curiosity</span>
            </span>
          </div>
          
          <div className="text-cyber-green/40 font-mono text-xs">
            <span className="animate-pulse">[STATUS]</span> 
            <span className="ml-2">SYSTEM OPERATIONAL</span>
          </div>
        </div>

        {/* Easter egg */}
        <div className="mt-8 text-center">
          <div className="text-cyber-green/20 font-mono text-xs">
            <span className="cursor-pointer hover:text-cyber-green/40 transition-colors duration-200"
                  title="The best way to learn hacking is to hack legally">
              // Happy hacking! But always stay legal and ethical.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
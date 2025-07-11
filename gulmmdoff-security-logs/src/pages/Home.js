import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, Tag, Terminal, Shield, Zap } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalText = "Welcome to the Logs of a Pentester...";
  const featuredPosts = blogPosts.slice(0, 3);

  useEffect(() => {
    if (currentIndex < terminalText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + terminalText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, terminalText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const stats = [
    { label: 'Blog Posts', value: blogPosts.length, icon: Terminal },
    { label: 'Categories', value: '6+', icon: Shield },
    { label: 'Tools Reviewed', value: '12+', icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-cyber-blue">
                  <Terminal className="w-5 h-5" />
                  <span className="font-mono text-sm">system@gulmmdoff:~$</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-cyber-green glitch-text" data-text="GULMMDOFF">
                    GULMMDOFF
                  </span>
                  <br />
                  <span className="text-cyber-blue">
                    Security Logs
                  </span>
                </h1>
                <div className="text-xl text-cyber-green/80 font-mono h-8">
                  {typedText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                    _
                  </span>
                </div>
              </div>

              <p className="text-lg text-cyber-green/70 font-mono leading-relaxed max-w-lg">
                Junior penetration tester documenting the journey through 
                <span className="text-cyber-blue"> cybersecurity</span>, sharing 
                <span className="text-cyber-green"> writeups</span>, 
                <span className="text-cyber-blue"> tool reviews</span>, and 
                <span className="text-cyber-green"> threat research</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/blog" 
                  className="cyber-button flex items-center justify-center space-x-2 py-3 px-6"
                >
                  <Terminal className="w-5 h-5" />
                  <span>Explore Blog</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/tools" 
                  className="bg-transparent border border-cyber-blue text-cyber-blue px-6 py-3 rounded
                           hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-200
                           font-mono text-sm flex items-center justify-center space-x-2"
                >
                  <Shield className="w-5 h-5" />
                  <span>Tool Reviews</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Terminal Window */}
            <div className="lg:pl-8">
              <div className="terminal-window animate-fadeIn">
                <div className="terminal-header">
                  <div className="terminal-dot bg-cyber-red"></div>
                  <div className="terminal-dot bg-cyber-yellow"></div>
                  <div className="terminal-dot bg-cyber-green"></div>
                  <span className="ml-4 text-cyber-green font-mono text-sm">
                    pentester@gulmmdoff:~/logs$
                  </span>
                </div>
                <div className="terminal-content">
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-cyber-blue">$</span>
                      <span className="ml-2 text-cyber-green">whoami</span>
                    </div>
                    <div className="text-cyber-green/80">junior_pentester</div>
                    
                    <div className="flex mt-3">
                      <span className="text-cyber-blue">$</span>
                      <span className="ml-2 text-cyber-green">cat skills.txt</span>
                    </div>
                    <div className="text-cyber-green/80 space-y-1">
                      <div>→ Network Penetration Testing</div>
                      <div>→ Web Application Security</div>
                      <div>→ OSINT & Social Engineering</div>
                      <div>→ Malware Analysis (Learning)</div>
                      <div>→ CTF Competitions</div>
                    </div>

                    <div className="flex mt-3">
                      <span className="text-cyber-blue">$</span>
                      <span className="ml-2 text-cyber-green">ls -la recent_posts/</span>
                    </div>
                    <div className="text-cyber-green/80 space-y-1">
                      {featuredPosts.map((post, index) => (
                        <div key={post.id} className="flex justify-between">
                          <span>→ {post.title.substring(0, 30)}...</span>
                          <span className="text-cyber-blue text-xs">{post.date}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex mt-3">
                      <span className="text-cyber-blue">$</span>
                      <span className="ml-2 text-cyber-green animate-terminal-cursor">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cyber-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="cyber-card text-center group hover:scale-105 transform transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-cyber-green mx-auto mb-4 group-hover:animate-pulse" />
                  <div className="text-3xl font-bold text-cyber-green mb-2">{stat.value}</div>
                  <div className="text-cyber-green/70 font-mono">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
              Latest Security Logs
            </h2>
            <p className="text-cyber-green/70 font-mono">
              Recent writeups and research findings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="cyber-card group hover:scale-105 transform transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-cyber-blue text-xs font-mono">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-cyber-green/60 text-xs font-mono">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}m</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-cyber-green group-hover:text-cyber-blue 
                                 transition-colors duration-200 font-mono leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag flex items-center space-x-1">
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-cyber-green/60 font-mono text-xs">
                      By {post.author}
                    </span>
                    <ChevronRight className="w-5 h-5 text-cyber-green group-hover:translate-x-1 
                                             transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="cyber-button inline-flex items-center space-x-2 py-3 px-8"
            >
              <span>View All Posts</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-gray/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cyber-card">
            <Terminal className="w-16 h-16 text-cyber-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
              Stay Updated
            </h2>
            <p className="text-cyber-green/70 font-mono mb-8 max-w-2xl mx-auto">
              Follow my journey as I dive deeper into cybersecurity. 
              New writeups, tool reviews, and research findings published regularly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="cyber-button inline-flex items-center space-x-2 py-3 px-6"
              >
                <span>Get In Touch</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a 
                href="https://github.com/gulmmdoff" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-cyber-blue text-cyber-blue px-6 py-3 rounded
                         hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-200
                         font-mono text-sm inline-flex items-center space-x-2"
              >
                <span>Follow on GitHub</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Tools from './pages/Tools';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for terminal effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="terminal-window max-w-2xl w-full mx-4">
          <div className="terminal-header">
            <div className="terminal-dot bg-cyber-red"></div>
            <div className="terminal-dot bg-cyber-yellow"></div>
            <div className="terminal-dot bg-cyber-green"></div>
            <span className="ml-4 text-cyber-green font-mono text-sm">system@gulmmdoff:~$</span>
          </div>
          <div className="terminal-content">
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-cyber-blue">$</span>
                <span className="ml-2 text-cyber-green">sudo ./gulmmdoff-security-logs</span>
              </div>
              <div className="text-cyber-green/80">
                [INFO] Initializing security framework...
              </div>
              <div className="text-cyber-green/80">
                [INFO] Loading exploit database...
              </div>
              <div className="text-cyber-green/80">
                [INFO] Establishing secure connection...
              </div>
              <div className="text-cyber-green/80">
                [SUCCESS] System ready. Welcome to Gulmmdoff Security Logs.
              </div>
              <div className="flex items-center">
                <span className="text-cyber-blue">$</span>
                <span className="ml-2 text-cyber-green animate-terminal-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-cyber-dark text-cyber-green font-mono">
        <ScrollToTop />
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

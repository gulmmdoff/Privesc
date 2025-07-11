import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, ChevronRight, User } from 'lucide-react';
import { marked } from 'marked';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostById, blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const foundPost = getPostById(id);
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts by tags
      const related = blogPosts
        .filter(p => p.id !== foundPost.id)
        .filter(p => p.tags.some(tag => foundPost.tags.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);
    }
    setLoading(false);
  }, [id]);

  // Configure marked for syntax highlighting
  useEffect(() => {
    marked.setOptions({
      highlight: function(code, lang) {
        return `<pre><code class="language-${lang}">${code}</code></pre>`;
      },
      breaks: true,
      gfm: true
    });
  }, []);

  const renderMarkdown = (content) => {
    const html = marked(content);
    return { __html: html };
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const getTagColor = (tag) => {
    const colors = {
      'XSS': 'border-cyber-red text-cyber-red bg-cyber-red/10',
      'OSINT': 'border-cyber-blue text-cyber-blue bg-cyber-blue/10',
      'Nmap': 'border-cyber-green text-cyber-green bg-cyber-green/10',
      'Windows': 'border-cyber-purple text-cyber-purple bg-cyber-purple/10',
      'Buffer Overflow': 'border-cyber-yellow text-cyber-yellow bg-cyber-yellow/10',
      'PowerShell': 'border-cyber-blue text-cyber-blue bg-cyber-blue/10'
    };
    return colors[tag] || 'border-cyber-green text-cyber-green bg-cyber-green/10';
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-8 flex items-center justify-center">
        <div className="terminal-window max-w-md">
          <div className="terminal-header">
            <div className="terminal-dot bg-cyber-red"></div>
            <div className="terminal-dot bg-cyber-yellow"></div>
            <div className="terminal-dot bg-cyber-green"></div>
            <span className="ml-4 text-cyber-green font-mono text-sm">loading@blog:~$</span>
          </div>
          <div className="terminal-content">
            <div className="text-cyber-green font-mono text-sm">
              <div className="animate-pulse">Loading post...</div>
              <div className="flex mt-2">
                <span className="text-cyber-blue">$</span>
                <span className="ml-2 animate-terminal-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-8 flex items-center justify-center">
        <div className="cyber-card max-w-md text-center">
          <h1 className="text-2xl font-bold text-cyber-red mb-4 font-mono">404</h1>
          <p className="text-cyber-green/70 font-mono mb-6">Post not found</p>
          <Link to="/blog" className="cyber-button">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-cyber-green/80 hover:text-cyber-green 
                       transition-colors duration-200 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Article Header */}
        <article className="cyber-card mb-8">
          <header className="mb-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyber-blue mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Published: {post.date}</span>
              </div>
              {post.lastUpdated !== post.date && (
                <div className="flex items-center space-x-1 text-cyber-yellow">
                  <Calendar className="w-4 h-4" />
                  <span>Updated: {post.lastUpdated}</span>
                </div>
              )}
              <div className="flex items-center space-x-1 text-cyber-green/60">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center space-x-1 text-cyber-green/60">
                <User className="w-4 h-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-cyber-green mb-4 font-mono leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-cyber-green/80 font-mono leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Tags and Share */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`px-3 py-1 rounded-md text-xs font-mono border ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button
                onClick={sharePost}
                className="flex items-center space-x-1 text-cyber-green/60 hover:text-cyber-green 
                           transition-colors duration-200 font-mono text-sm"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose-cyber">
            <div 
              dangerouslySetInnerHTML={renderMarkdown(post.content)}
              className="prose prose-invert max-w-none
                         prose-headings:text-cyber-green prose-headings:font-mono
                         prose-p:text-cyber-green/80 prose-p:font-mono prose-p:leading-relaxed
                         prose-a:text-cyber-blue prose-a:no-underline hover:prose-a:text-cyber-green
                         prose-strong:text-cyber-green prose-em:text-cyber-blue
                         prose-code:text-cyber-blue prose-code:bg-cyber-darker prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                         prose-pre:bg-cyber-darker prose-pre:border prose-pre:border-cyber-green/30
                         prose-blockquote:border-l-cyber-blue prose-blockquote:text-cyber-blue/80
                         prose-ul:text-cyber-green/80 prose-ol:text-cyber-green/80
                         prose-li:text-cyber-green/80 prose-li:font-mono
                         prose-table:text-cyber-green/80 prose-th:text-cyber-green prose-th:border-cyber-green/30
                         prose-td:border-cyber-green/20"
            />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-cyber-green mb-8 font-mono">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="cyber-card group hover:scale-105 transform transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-cyber-blue text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{relatedPost.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-cyber-green group-hover:text-cyber-blue 
                                   transition-colors duration-200 font-mono leading-tight">
                      {relatedPost.title.length > 60 
                        ? relatedPost.title.substring(0, 60) + '...'
                        : relatedPost.title}
                    </h3>
                    
                    <p className="text-cyber-green/70 font-mono text-sm">
                      {relatedPost.excerpt.length > 100
                        ? relatedPost.excerpt.substring(0, 100) + '...'
                        : relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {relatedPost.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="tag text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ChevronRight className="w-4 h-4 text-cyber-green group-hover:translate-x-1 
                                               transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <nav className="flex justify-between items-center py-8 border-t border-cyber-green/20">
          <Link 
            to="/blog"
            className="flex items-center space-x-2 text-cyber-green/80 hover:text-cyber-green 
                       transition-colors duration-200 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Posts</span>
          </Link>
          
          <div className="flex items-center space-x-4 text-cyber-green/60 font-mono text-xs">
            <span>#{post.id}</span>
            <span>•</span>
            <span>{post.readTime}m read</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BlogPost;
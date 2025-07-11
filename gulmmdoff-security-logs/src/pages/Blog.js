import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, Tag, ChevronRight, Filter, X } from 'lucide-react';
import { blogPosts, searchPosts, getPostsByTag } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  useEffect(() => {
    let posts = blogPosts;
    
    if (searchTerm) {
      posts = searchPosts(searchTerm);
    }
    
    if (selectedTag) {
      posts = posts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }
    
    setFilteredPosts(posts);
  }, [searchTerm, selectedTag]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setFilteredPosts(blogPosts);
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

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyber-green mb-4 font-mono">
            Security Blog
          </h1>
          <p className="text-cyber-green/70 font-mono text-lg">
            Writeups, research, and insights from the field
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="cyber-card">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyber-green/60" />
                <input
                  type="text"
                  placeholder="Search posts by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="cyber-input pl-10 w-full"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="cyber-button flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>

              {/* Clear Filters */}
              {(searchTerm || selectedTag) && (
                <button
                  onClick={clearFilters}
                  className="text-cyber-red hover:text-cyber-red/80 transition-colors duration-200 flex items-center space-x-1"
                >
                  <X className="w-4 h-4" />
                  <span className="font-mono text-sm">Clear</span>
                </button>
              )}
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-cyber-green/20">
                <h3 className="text-cyber-green font-mono font-semibold mb-4">Filter by Tag:</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                      className={`px-3 py-1 rounded-md text-xs font-mono border transition-all duration-200 ${
                        selectedTag === tag 
                          ? getTagColor(tag)
                          : 'border-cyber-green/30 text-cyber-green/60 hover:border-cyber-green/50'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-cyber-green/70 font-mono text-sm">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
              {selectedTag && ` in "${selectedTag}"`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
            
            {filteredPosts.length > 0 && (
              <div className="text-cyber-green/60 font-mono text-xs">
                Latest: {filteredPosts[0]?.date}
              </div>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="cyber-card group hover:scale-105 transform transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-4 text-cyber-blue">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-cyber-green/60">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}m read</span>
                      </div>
                    </div>
                    {post.lastUpdated !== post.date && (
                      <div className="text-cyber-yellow text-xs">
                        Updated: {post.lastUpdated}
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-cyber-green group-hover:text-cyber-blue 
                                 transition-colors duration-200 font-mono leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`px-2 py-1 rounded-md text-xs font-mono border ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-cyber-green/20">
                    <span className="text-cyber-green/60 font-mono text-xs">
                      By {post.author}
                    </span>
                    <div className="flex items-center space-x-1 text-cyber-green group-hover:text-cyber-blue 
                                    transition-colors duration-200">
                      <span className="font-mono text-xs">Read more</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-20">
            <div className="cyber-card max-w-md mx-auto">
              <Search className="w-16 h-16 text-cyber-green/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-cyber-green mb-2 font-mono">
                No Posts Found
              </h3>
              <p className="text-cyber-green/70 font-mono text-sm mb-6">
                {searchTerm || selectedTag 
                  ? "Try adjusting your search terms or filters."
                  : "No blog posts available yet."}
              </p>
              <button
                onClick={clearFilters}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Featured Tags Section */}
        {!searchTerm && !selectedTag && (
          <div className="mt-20 py-12 border-t border-cyber-green/20">
            <h2 className="text-2xl font-bold text-cyber-green mb-8 font-mono text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {allTags.slice(0, 6).map((tag) => {
                const tagPosts = getPostsByTag(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className="cyber-card text-center group hover:scale-105 transform transition-all duration-300"
                  >
                    <Tag className="w-8 h-8 text-cyber-green mx-auto mb-2 group-hover:animate-pulse" />
                    <div className="font-mono text-sm text-cyber-green mb-1">{tag}</div>
                    <div className="font-mono text-xs text-cyber-green/60">
                      {tagPosts.length} post{tagPosts.length !== 1 ? 's' : ''}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
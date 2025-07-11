import React, { useState } from 'react';
import { Star, Tool, Shield, Search, Filter, ExternalLink } from 'lucide-react';
import { tools } from '../data/blogPosts';

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools);

  // Get unique categories
  const categories = [...new Set(tools.map(tool => tool.category))];

  React.useEffect(() => {
    let filtered = tools;
    
    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    setFilteredTools(filtered);
  }, [searchTerm, selectedCategory]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-cyber-yellow fill-current' 
            : 'text-cyber-green/30'
        }`}
      />
    ));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Network Scanning': 'border-cyber-green text-cyber-green bg-cyber-green/10',
      'Web Application Testing': 'border-cyber-blue text-cyber-blue bg-cyber-blue/10',
      'Exploitation Framework': 'border-cyber-red text-cyber-red bg-cyber-red/10',
      'Network Analysis': 'border-cyber-purple text-cyber-purple bg-cyber-purple/10',
      'Password Cracking': 'border-cyber-yellow text-cyber-yellow bg-cyber-yellow/10',
      'Directory Enumeration': 'border-cyber-green text-cyber-green bg-cyber-green/10'
    };
    return colors[category] || 'border-cyber-green text-cyber-green bg-cyber-green/10';
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyber-green mb-4 font-mono">
            Security Tools
          </h1>
          <p className="text-cyber-green/70 font-mono text-lg">
            Reviews and insights on essential cybersecurity tools
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="cyber-card">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyber-green/60" />
                <input
                  type="text"
                  placeholder="Search tools by name, category, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="cyber-input pl-10 w-full"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-cyber-green" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="cyber-input"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8">
          <p className="text-cyber-green/70 font-mono text-sm">
            {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
            {selectedCategory && ` in "${selectedCategory}"`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="cyber-card group hover:scale-105 transform transition-all duration-300">
                <div className="space-y-6">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Tool className="w-8 h-8 text-cyber-green group-hover:animate-pulse" />
                      <div>
                        <h3 className="text-xl font-bold text-cyber-green font-mono">
                          {tool.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-md text-xs font-mono border ${getCategoryColor(tool.category)}`}>
                            {tool.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {renderStars(tool.rating)}
                      <span className="text-cyber-green/60 font-mono text-sm ml-2">
                        {tool.rating}/5
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Use Case */}
                  <div className="space-y-2">
                    <h4 className="text-cyber-blue font-mono font-semibold text-sm">Use Case:</h4>
                    <p className="text-cyber-green/70 font-mono text-sm italic">
                      "{tool.useCase}"
                    </p>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-cyber-green font-mono font-semibold text-sm mb-2 flex items-center">
                        <span className="w-2 h-2 bg-cyber-green rounded-full mr-2"></span>
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, index) => (
                          <li key={index} className="text-cyber-green/70 font-mono text-xs flex items-start">
                            <span className="text-cyber-green mr-2">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-cyber-red font-mono font-semibold text-sm mb-2 flex items-center">
                        <span className="w-2 h-2 bg-cyber-red rounded-full mr-2"></span>
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {tool.cons.map((con, index) => (
                          <li key={index} className="text-cyber-green/70 font-mono text-xs flex items-start">
                            <span className="text-cyber-red mr-2">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-cyber-green/20">
                    <div className="text-cyber-green/60 font-mono text-xs">
                      Last reviewed: Recently
                    </div>
                    <button className="cyber-button text-xs py-1 px-3 flex items-center space-x-1">
                      <ExternalLink className="w-3 h-3" />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-20">
            <div className="cyber-card max-w-md mx-auto">
              <Tool className="w-16 h-16 text-cyber-green/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-cyber-green mb-2 font-mono">
                No Tools Found
              </h3>
              <p className="text-cyber-green/70 font-mono text-sm mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Categories Overview */}
        {!searchTerm && !selectedCategory && (
          <div className="mt-20 py-12 border-t border-cyber-green/20">
            <h2 className="text-2xl font-bold text-cyber-green mb-8 font-mono text-center">
              Tool Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const categoryTools = tools.filter(tool => tool.category === category);
                const avgRating = (categoryTools.reduce((sum, tool) => sum + tool.rating, 0) / categoryTools.length).toFixed(1);
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="cyber-card text-left group hover:scale-105 transform transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Shield className="w-8 h-8 text-cyber-green group-hover:animate-pulse" />
                        <div className="flex items-center space-x-1">
                          {renderStars(Math.round(avgRating))}
                          <span className="text-cyber-green/60 font-mono text-xs ml-1">
                            {avgRating}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-mono text-lg text-cyber-green group-hover:text-cyber-blue 
                                     transition-colors duration-200">
                        {category}
                      </h3>
                      
                      <div className="flex items-center justify-between text-cyber-green/60 font-mono text-sm">
                        <span>{categoryTools.length} tool{categoryTools.length !== 1 ? 's' : ''}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tool Suggestion CTA */}
        <div className="mt-20 py-12 border-t border-cyber-green/20">
          <div className="cyber-card text-center max-w-2xl mx-auto">
            <Tool className="w-12 h-12 text-cyber-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-cyber-green mb-4 font-mono">
              Missing a Tool?
            </h2>
            <p className="text-cyber-green/70 font-mono text-sm mb-6">
              Have a cybersecurity tool you'd like me to review? 
              Send me a suggestion and I'll add it to my testing queue.
            </p>
            <button className="cyber-button">
              Suggest a Tool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
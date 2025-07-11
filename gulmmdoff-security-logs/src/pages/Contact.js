import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageCircle, MapPin, Clock, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Best for detailed discussions',
      value: 'gulmmdoff@protonmail.com',
      link: 'mailto:gulmmdoff@protonmail.com',
      color: 'text-cyber-green'
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'Code, tools, and contributions',
      value: '@gulmmdoff',
      link: 'https://github.com/gulmmdoff',
      color: 'text-cyber-blue'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Professional networking',
      value: '/in/gulmmdoff',
      link: 'https://linkedin.com/in/gulmmdoff',
      color: 'text-cyber-purple'
    }
  ];

  const responseInfo = [
    {
      icon: Clock,
      title: 'Response Time',
      description: 'I typically respond within 24-48 hours during weekdays.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'All communications are treated with confidentiality and respect.'
    },
    {
      icon: MessageCircle,
      title: 'Topics',
      description: 'Happy to discuss security research, career advice, or collaborations.'
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-cyber-green mb-4 font-mono">
            Get In Touch
          </h1>
          <p className="text-cyber-green/70 font-mono text-lg max-w-2xl mx-auto">
            Whether you have questions about cybersecurity, want to collaborate, 
            or just want to chat about the latest threats, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="cyber-card">
              <div className="flex items-center space-x-3 mb-8">
                <Send className="w-8 h-8 text-cyber-green" />
                <h2 className="text-2xl font-bold text-cyber-green font-mono">Send a Message</h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="terminal-window max-w-md mx-auto">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-cyber-red"></div>
                      <div className="terminal-dot bg-cyber-yellow"></div>
                      <div className="terminal-dot bg-cyber-green"></div>
                      <span className="ml-4 text-cyber-green font-mono text-sm">message@sent:~$</span>
                    </div>
                    <div className="terminal-content">
                      <div className="text-cyber-green font-mono text-sm space-y-2">
                        <div>[SUCCESS] Message transmitted successfully!</div>
                        <div>[INFO] Response incoming within 24-48 hours...</div>
                        <div className="flex mt-3">
                          <span className="text-cyber-blue">$</span>
                          <span className="ml-2 animate-terminal-cursor">_</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="cyber-button mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cyber-green font-mono text-sm mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="cyber-input w-full"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-cyber-green font-mono text-sm mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="cyber-input w-full"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cyber-green font-mono text-sm mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="cyber-input w-full"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-green font-mono text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="cyber-input w-full resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full md:w-auto flex items-center justify-center space-x-2 py-3 px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-cyber-green border-t-transparent"></div>
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-cyber-green/60 font-mono text-xs">
                    * Required fields. Your information is never shared or stored.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-6">
            
            {/* Direct Contact */}
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-cyber-green mb-6 font-mono">
                Direct Contact
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="flex items-center space-x-4 p-3 rounded-lg 
                                      border border-cyber-green/20 hover:border-cyber-green/40 
                                      transition-all duration-200 hover:scale-105">
                        <Icon className={`w-6 h-6 ${method.color} group-hover:animate-pulse`} />
                        <div className="flex-1">
                          <div className="text-cyber-green font-mono text-sm font-semibold">
                            {method.title}
                          </div>
                          <div className="text-cyber-green/70 font-mono text-xs">
                            {method.subtitle}
                          </div>
                          <div className={`${method.color} font-mono text-xs mt-1`}>
                            {method.value}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Information */}
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-cyber-green mb-6 font-mono">
                What to Expect
              </h3>
              <div className="space-y-4">
                {responseInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-cyber-blue mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-cyber-green font-mono text-sm font-semibold mb-1">
                          {info.title}
                        </div>
                        <div className="text-cyber-green/70 font-mono text-xs leading-relaxed">
                          {info.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-cyber-green mb-6 font-mono">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyber-purple mt-1" />
                  <div>
                    <div className="text-cyber-green font-mono text-sm font-semibold mb-1">
                      Time Zone
                    </div>
                    <div className="text-cyber-green/70 font-mono text-xs">
                      UTC+0 (London, UK)
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-cyber-yellow mt-1" />
                  <div>
                    <div className="text-cyber-green font-mono text-sm font-semibold mb-1">
                      Best Times
                    </div>
                    <div className="text-cyber-green/70 font-mono text-xs">
                      Weekdays: 9 AM - 6 PM<br />
                      Weekends: Limited availability
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Topics I'm Interested In */}
        <div className="mt-20">
          <div className="cyber-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
                Let's Talk About
              </h2>
              <p className="text-cyber-green/70 font-mono text-sm">
                Here are some topics I'm always excited to discuss
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Penetration Testing', emoji: '🔍' },
                { title: 'Web Security', emoji: '🌐' },
                { title: 'Career Advice', emoji: '💼' },
                { title: 'Tool Reviews', emoji: '🛠️' },
                { title: 'CTF Challenges', emoji: '🚩' },
                { title: 'OSINT Techniques', emoji: '🕵️' },
                { title: 'Security Research', emoji: '📊' },
                { title: 'Collaborations', emoji: '🤝' }
              ].map((topic, index) => (
                <div key={index} className="text-center p-4 rounded-lg border border-cyber-green/20 
                                          hover:border-cyber-green/40 transition-all duration-200">
                  <div className="text-2xl mb-2">{topic.emoji}</div>
                  <div className="text-cyber-green font-mono text-sm">{topic.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="cyber-card">
            <h2 className="text-3xl font-bold text-cyber-green mb-8 font-mono text-center">
              Frequently Asked
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Do you offer paid security consulting?",
                  a: "Currently, I'm focused on my full-time role and learning. However, I'm open to discussing small projects or collaborations."
                },
                {
                  q: "Can you review my security tool/project?",
                  a: "Absolutely! I love discovering new tools. Send me the details and I'll consider it for a future review."
                },
                {
                  q: "Are you available for mentoring?",
                  a: "I'm still early in my career, but I'm happy to share my journey and resources with those just starting out."
                },
                {
                  q: "Do you accept guest posts or collaborations?",
                  a: "Yes! I'm interested in guest posts, joint research, or other collaborative content. Let's discuss your ideas."
                }
              ].map((faq, index) => (
                <div key={index} className="border-l-2 border-cyber-blue pl-4">
                  <div className="text-cyber-green font-mono text-sm font-semibold mb-2">
                    Q: {faq.q}
                  </div>
                  <div className="text-cyber-green/70 font-mono text-sm">
                    A: {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
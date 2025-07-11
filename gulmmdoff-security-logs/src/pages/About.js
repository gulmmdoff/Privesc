import React from 'react';
import { Terminal, Shield, User, Award, Code, BookOpen, Target, Clock } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Network Penetration Testing', level: 75, category: 'testing' },
    { name: 'Web Application Security', level: 80, category: 'testing' },
    { name: 'OSINT & Social Engineering', level: 70, category: 'intel' },
    { name: 'Linux Administration', level: 85, category: 'technical' },
    { name: 'Python Scripting', level: 65, category: 'technical' },
    { name: 'Vulnerability Assessment', level: 78, category: 'testing' },
    { name: 'Malware Analysis', level: 45, category: 'analysis' },
    { name: 'Digital Forensics', level: 40, category: 'analysis' }
  ];

  const certifications = [
    { name: 'CEH v12', status: 'In Progress', date: '2024', color: 'text-cyber-yellow' },
    { name: 'Security+', status: 'Planned', date: '2024', color: 'text-cyber-blue' },
    { name: 'OSCP', status: 'Goal', date: '2025', color: 'text-cyber-green' }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Started Security Journey',
      description: 'Discovered cybersecurity through ethical hacking videos and began self-learning.',
      icon: Target
    },
    {
      year: '2023',
      title: 'First CTF Competition',
      description: 'Participated in my first Capture The Flag event and got hooked on practical security.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Junior Penetration Tester Role',
      description: 'Landed my first role in cybersecurity, focusing on web application testing.',
      icon: Shield
    },
    {
      year: '2024',
      title: 'Started Security Blog',
      description: 'Launched this blog to document my learning journey and share knowledge.',
      icon: BookOpen
    }
  ];

  const getSkillColor = (category) => {
    const colors = {
      'testing': 'bg-cyber-green',
      'intel': 'bg-cyber-blue',
      'technical': 'bg-cyber-purple',
      'analysis': 'bg-cyber-yellow'
    };
    return colors[category] || 'bg-cyber-green';
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-cyber-green mb-4 font-mono">
            About Gulmmdoff
          </h1>
          <p className="text-cyber-green/70 font-mono text-lg">
            Junior penetration tester on a mission to secure the digital world
          </p>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="cyber-card">
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-8 h-8 text-cyber-green" />
                <h2 className="text-2xl font-bold text-cyber-green font-mono">My Story</h2>
              </div>
              
              <div className="space-y-4 text-cyber-green/80 font-mono text-sm leading-relaxed">
                <p>
                  Hey there! I'm a junior penetration tester with a passion for cybersecurity 
                  and an insatiable curiosity about how systems work—and more importantly, 
                  how they can be secured.
                </p>
                
                <p>
                  My journey into cybersecurity started relatively recently, but it's been 
                  an intense and exciting ride. What began as casual interest in ethical 
                  hacking videos quickly evolved into hands-on learning, CTF competitions, 
                  and eventually landing my first role in the industry.
                </p>
                
                <p>
                  I believe in learning by doing, which is why you'll find plenty of 
                  practical writeups and tool reviews on this blog. Every vulnerability 
                  I discover, every tool I test, and every technique I learn becomes 
                  content that might help other aspiring security professionals.
                </p>
                
                <p>
                  When I'm not testing applications or writing blog posts, you can find 
                  me practicing on vulnerable lab environments, reading security research, 
                  or contributing to open-source security tools.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="cyber-card text-center">
              <Terminal className="w-12 h-12 text-cyber-green mx-auto mb-4" />
              <div className="text-2xl font-bold text-cyber-green mb-2 font-mono">2+</div>
              <div className="text-cyber-green/70 font-mono text-sm">Years in Security</div>
            </div>
            
            <div className="cyber-card text-center">
              <Shield className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <div className="text-2xl font-bold text-cyber-blue mb-2 font-mono">50+</div>
              <div className="text-cyber-green/70 font-mono text-sm">Vulnerabilities Found</div>
            </div>
            
            <div className="cyber-card text-center">
              <Code className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
              <div className="text-2xl font-bold text-cyber-purple mb-2 font-mono">15+</div>
              <div className="text-cyber-green/70 font-mono text-sm">CTFs Completed</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
              Technical Skills
            </h2>
            <p className="text-cyber-green/70 font-mono">
              Current competencies and areas of focus
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="cyber-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyber-green font-mono text-sm">{skill.name}</span>
                  <span className="text-cyber-green/60 font-mono text-xs">{skill.level}%</span>
                </div>
                <div className="w-full bg-cyber-gray/50 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getSkillColor(skill.category)} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
              My Journey
            </h2>
            <p className="text-cyber-green/70 font-mono">
              Key milestones in my cybersecurity path
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyber-gray border-2 border-cyber-green rounded-full 
                                    flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyber-green" />
                    </div>
                  </div>
                  <div className="cyber-card flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-cyber-blue font-mono text-sm font-bold">{item.year}</span>
                      <h3 className="text-cyber-green font-mono text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-cyber-green/70 font-mono text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
              Certifications & Goals
            </h2>
            <p className="text-cyber-green/70 font-mono">
              Current progress and future objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="cyber-card text-center">
                <Award className={`w-12 h-12 mx-auto mb-4 ${cert.color}`} />
                <h3 className="text-cyber-green font-mono text-lg font-semibold mb-2">
                  {cert.name}
                </h3>
                <div className={`${cert.color} font-mono text-sm mb-1`}>
                  {cert.status}
                </div>
                <div className="text-cyber-green/60 font-mono text-xs">
                  Target: {cert.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20">
          <div className="cyber-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
                My Philosophy
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-cyber-blue font-mono text-lg font-semibold">Ethical First</h3>
                <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
                  Every technique I learn and share is grounded in ethical practice. 
                  Cybersecurity is about protecting people and organizations, never 
                  causing harm.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-cyber-blue font-mono text-lg font-semibold">Continuous Learning</h3>
                <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
                  The cybersecurity landscape evolves daily. I'm committed to 
                  staying current with new threats, tools, and defensive techniques 
                  through constant learning and practice.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-cyber-blue font-mono text-lg font-semibold">Knowledge Sharing</h3>
                <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
                  The security community thrives on shared knowledge. Every writeup 
                  and tutorial I create aims to help others learn and grow in their 
                  cybersecurity journey.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-cyber-blue font-mono text-lg font-semibold">Practical Focus</h3>
                <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
                  Theory is important, but hands-on experience is invaluable. 
                  I believe in learning by doing, which is why my content focuses 
                  on practical, real-world applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card max-w-2xl mx-auto">
            <Terminal className="w-16 h-16 text-cyber-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-cyber-green mb-4 font-mono">
              Let's Connect
            </h2>
            <p className="text-cyber-green/70 font-mono text-sm mb-8 max-w-lg mx-auto">
              Always interested in connecting with fellow security enthusiasts, 
              mentors, and anyone passionate about cybersecurity. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="cyber-button inline-flex items-center space-x-2 py-3 px-6"
              >
                <span>Get In Touch</span>
              </a>
              <a 
                href="https://linkedin.com/in/gulmmdoff" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-cyber-blue text-cyber-blue px-6 py-3 rounded
                         hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-200
                         font-mono text-sm inline-flex items-center space-x-2"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
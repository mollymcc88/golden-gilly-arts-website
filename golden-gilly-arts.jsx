import React, { useState, useEffect } from 'react';
import { Calendar, Users, Briefcase, Video, Mail, Star, ArrowRight, Menu, X, MapPin, Clock, Quote } from 'lucide-react';

export default function GoldenGillyArts() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to open Calendly popup
  const openCalendly = (url) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
    return false;
  };

  const upcomingClasses = [
    {
      title: "Improv 101",
      type: "In-Person NYC",
      date: "Check Calendly for dates",
      time: "Various times available",
      location: "NYC",
      price: "See booking",
      spots: "Book now",
      calendlyUrl: "https://calendly.com/wjbyland/improv-101",
      available: true
    },
    {
      title: "Storytelling 101",
      type: "In-Person NYC",
      date: "Check Calendly for dates",
      time: "Various times available",
      location: "NYC",
      price: "See booking",
      spots: "Book now",
      calendlyUrl: "https://calendly.com/wjbyland/storytelling-101",
      available: true
    },
    {
      title: "Global Storytelling Circle",
      type: "Virtual (Worldwide)",
      date: "Coming Soon",
      time: "TBA",
      location: "Zoom",
      price: "TBA",
      spots: "Coming Soon",
      available: false
    },
    {
      title: "Teen Storytelling Workshop",
      type: "Virtual",
      date: "Coming Soon",
      time: "TBA",
      location: "Zoom",
      price: "TBA",
      spots: "Coming Soon",
      available: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      text: "Golden Gilly's corporate improv workshop transformed how our team communicates. We're more collaborative, creative, and confident.",
      image: "👩🏻‍💼"
    },
    {
      name: "Marcus Williams",
      role: "Storytelling Student",
      text: "I joined from London and found a global community of storytellers. Molly creates such a safe, inspiring space to share our truths.",
      image: "👨🏾‍💻"
    },
    {
      name: "Jessica Rodriguez",
      role: "Improv Student",
      text: "Best decision I made this year. I came in shy and left with genuine friendships and confidence I didn't know I had.",
      image: "👩🏽‍🎨"
    }
  ];

  const benefits = [
    {
      icon: "🎭",
      title: "Build Confidence",
      description: "Step into your authentic self through playful exploration and supportive community"
    },
    {
      icon: "🤝",
      title: "Connect Deeply",
      description: "Form genuine connections with fellow creatives in NYC and around the world"
    },
    {
      icon: "✨",
      title: "Unlock Creativity",
      description: "Discover your unique voice and break through creative blocks"
    },
    {
      icon: "💼",
      title: "Level Up Professionally",
      description: "Master presentation skills, active listening, and spontaneous thinking"
    }
  ];

  const blogPosts = [
    {
      title: "Why Every Adult Should Try Improv (Even If You're Terrified)",
      date: "Feb 10, 2026",
      excerpt: "The magic happens outside your comfort zone. Here's why improv is the antidote to perfectionism...",
      readTime: "5 min read"
    },
    {
      title: "The Storytelling Framework That Changed Everything",
      date: "Feb 3, 2026",
      excerpt: "Story structure doesn't kill creativity—it sets it free. Learn the simple framework we use in class...",
      readTime: "7 min read"
    },
    {
      title: "How Improv Made Me a Better Leader",
      date: "Jan 28, 2026",
      excerpt: "Corporate teams who play together, stay together. What I've learned teaching NYC's top companies...",
      readTime: "6 min read"
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Redirect to Beehiiv subscribe page
    window.open('https://mollys-newsletter-cd3bac.beehiiv.com/subscribe', '_blank');
  };

  return (
    <div style={{ 
      fontFamily: "'Crimson Pro', 'Georgia', serif",
      backgroundColor: '#FFFBF5',
      color: '#2C1810',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .warm-gradient {
          background: linear-gradient(135deg, #FFF8E7 0%, #FFE8CC 50%, #FFD6A5 100%);
        }

        .gold-accent {
          background: linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%);
        }

        .class-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
          border: 2px solid #2C1810;
          position: relative;
          overflow: hidden;
        }

        .class-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
          transition: left 0.5s;
        }

        .class-card:hover::before {
          left: 100%;
        }

        .class-card:hover {
          transform: translateY(-8px);
          box-shadow: 8px 8px 0 #D4AF37;
        }

        .btn-primary {
          background: #2C1810;
          color: #FFF8E7;
          border: none;
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .btn-primary:hover {
          background: #D4AF37;
          color: #2C1810;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(212, 175, 55, 0.3);
        }

        .btn-secondary {
          background: white;
          color: #2C1810;
          border: 2px solid #2C1810;
          padding: 12px 28px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #2C1810;
          color: white;
        }

        .testimonial-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #D4D4D4;
          cursor: pointer;
          transition: all 0.3s;
        }

        .testimonial-dot.active {
          background: #D4AF37;
          width: 32px;
          border-radius: 6px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }

        .decorative-blob {
          position: absolute;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          opacity: 0.1;
          filter: blur(40px);
          animation: blob-morph 8s ease-in-out infinite;
        }

        @keyframes blob-morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255, 251, 245, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(44, 24, 16, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: '20px 0'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '32px' }}>✨</div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#2C1810', letterSpacing: '-0.5px' }}>
                Golden Gilly Arts
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '-2px' }}>
                NYC Improv & Global Storytelling
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '32px', alignItems: 'center', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            <a href="#classes" style={{ color: '#2C1810', textDecoration: 'none', transition: 'color 0.3s' }}>Classes</a>
            <a href="#benefits" style={{ color: '#2C1810', textDecoration: 'none', transition: 'color 0.3s' }}>Why Improv</a>
            <a href="#corporate" style={{ color: '#2C1810', textDecoration: 'none', transition: 'color 0.3s' }}>Corporate</a>
            <a href="#blog" style={{ color: '#2C1810', textDecoration: 'none', transition: 'color 0.3s' }}>Blog</a>
            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: window.innerWidth <= 768 ? 'block' : 'none', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? <X size={28} color="#2C1810" /> : <Menu size={28} color="#2C1810" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ 
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: '#FFF8E7', 
            padding: '20px 40px',
            fontFamily: "'DM Sans', sans-serif"
          }}>
            <a href="#classes" style={{ display: 'block', padding: '12px 0', color: '#2C1810', textDecoration: 'none' }}>Classes</a>
            <a href="#benefits" style={{ display: 'block', padding: '12px 0', color: '#2C1810', textDecoration: 'none' }}>Why Improv</a>
            <a href="#corporate" style={{ display: 'block', padding: '12px 0', color: '#2C1810', textDecoration: 'none' }}>Corporate</a>
            <a href="#blog" style={{ display: 'block', padding: '12px 0', color: '#2C1810', textDecoration: 'none' }}>Blog</a>
            <button className="btn-primary" style={{ width: '100%', marginTop: '12px' }}>Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        padding: '180px 40px 120px',
        background: 'linear-gradient(135deg, #FFF8E7 0%, #FFE8CC 50%, #FFD6A5 100%)',
        overflow: 'hidden'
      }}>
        {/* Decorative Blobs */}
        <div className="decorative-blob" style={{ width: '400px', height: '400px', background: '#D4AF37', top: '-100px', right: '-100px' }}></div>
        <div className="decorative-blob" style={{ width: '300px', height: '300px', background: '#2C1810', bottom: '-50px', left: '-50px' }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <h1 className="fade-in-up stagger-1" style={{ 
              fontSize: 'clamp(48px, 8vw, 96px)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              marginBottom: '24px',
              color: '#2C1810'
            }}>
              No one looks stupid when they're having fun.
            </h1>
            <p className="fade-in-up stagger-2" style={{ 
              fontSize: '20px', 
              lineHeight: 1.6, 
              marginBottom: '16px',
              fontFamily: "'DM Sans', sans-serif",
              color: '#5C4033',
              maxWidth: '600px'
            }}>
              — Amy Poehler
            </p>
            <p className="fade-in-up stagger-3" style={{ 
              fontSize: '24px', 
              lineHeight: 1.6, 
              marginBottom: '40px',
              fontFamily: "'DM Sans', sans-serif",
              color: '#2C1810',
              maxWidth: '600px'
            }}>
              Join NYC's warmest improv community and connect with storytellers worldwide. Build confidence, unlock creativity, and discover your voice.
            </p>
            <div className="fade-in-up stagger-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => document.getElementById('classes').scrollIntoView({ behavior: 'smooth' })}>
                Browse Classes
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('corporate').scrollIntoView({ behavior: 'smooth' })}>
                Corporate Training
              </button>
            </div>
          </div>
        </div>

        {/* Floating Emoji */}
        <div className="float" style={{ position: 'absolute', bottom: '60px', right: '80px', fontSize: '120px', opacity: 0.3 }}>
          🎭
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={{ padding: '100px 40px', background: '#FFFBF5' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, marginBottom: '16px' }}>
              Why Improv Changes Everything
            </h2>
            <p style={{ fontSize: '20px', color: '#5C4033', fontFamily: "'DM Sans', sans-serif", maxWidth: '600px', margin: '0 auto' }}>
              Improv isn't just games and laughter—it's a transformative practice that ripples into every part of your life.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px' 
          }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  border: '2px solid #2C1810',
                  padding: '40px',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0 #D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', fontFamily: "'DM Sans', sans-serif" }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5C4033', fontFamily: "'DM Sans', sans-serif" }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" style={{ padding: '100px 40px', background: 'linear-gradient(180deg, #FFFBF5 0%, #FFF8E7 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, marginBottom: '16px' }}>
              Upcoming Classes
            </h2>
            <p style={{ fontSize: '20px', color: '#5C4033', fontFamily: "'DM Sans', sans-serif" }}>
              In-person NYC classes and virtual sessions for our global community
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {upcomingClasses.map((classItem, index) => (
              <div key={index} className="class-card" style={{ padding: '32px', borderRadius: '0' }}>
                <div style={{ 
                  display: 'inline-block',
                  background: classItem.type.includes('NYC') ? '#2C1810' : '#D4AF37',
                  color: classItem.type.includes('NYC') ? '#FFF8E7' : '#2C1810',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '16px'
                }}>
                  {classItem.type}
                </div>

                <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px', fontFamily: "'DM Sans', sans-serif" }}>
                  {classItem.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: '#5C4033' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} />
                    <span>{classItem.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={18} />
                    <span>{classItem.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} />
                    <span>{classItem.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '32px', fontWeight: 700, color: '#D4AF37' }}>
                    {classItem.price}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    fontFamily: "'DM Sans', sans-serif",
                    color: classItem.spots === 'SOLD OUT' ? '#D32F2F' : '#2C1810',
                    fontWeight: 600
                  }}>
                    {classItem.spots}
                  </div>
                </div>

                <button 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                  disabled={!classItem.available}
                  onClick={() => classItem.available && openCalendly(classItem.calendlyUrl)}
                >
                  {classItem.available ? 'Reserve Spot' : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontSize: '16px', color: '#5C4033', fontFamily: "'DM Sans', sans-serif", marginBottom: '16px' }}>
              Don't see a time that works? We're adding new sessions regularly.
            </p>
            <button className="btn-secondary">
              Get Notified of New Classes
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '100px 40px', background: 'linear-gradient(135deg, #2C1810 0%, #3D2517 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Quote size={48} style={{ color: '#D4AF37', marginBottom: '32px' }} />
          
          <div style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ 
              fontSize: 'clamp(20px, 3vw, 28px)', 
              lineHeight: 1.6, 
              marginBottom: '32px',
              fontStyle: 'italic'
            }}>
              "{testimonials[activeTestimonial].text}"
            </p>
            <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                {testimonials[activeTestimonial].image}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#D4AF37' }}>
                {testimonials[activeTestimonial].name}
              </div>
              <div style={{ fontSize: '16px', color: '#FFE8CC' }}>
                {testimonials[activeTestimonial].role}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" style={{ padding: '100px 40px', background: '#FFFBF5' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>💼</div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, marginBottom: '24px' }}>
                Corporate Training That Actually Works
              </h2>
              <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5C4033', fontFamily: "'DM Sans', sans-serif", marginBottom: '32px' }}>
                Transform your team's communication, collaboration, and creative problem-solving through custom improv workshops. We've worked with startups, Fortune 500s, and everything in between across NYC.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {['Active listening & presence', 'Adaptability under pressure', 'Collaborative innovation', 'Public speaking confidence'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>
                    <div style={{ width: '24px', height: '24px', background: '#D4AF37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary">
                Schedule a Consultation
              </button>
            </div>

            <div style={{ 
              background: 'white', 
              border: '3px solid #2C1810', 
              padding: '48px',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                background: '#D4AF37',
                width: '100%',
                height: '100%',
                zIndex: -1
              }}></div>
              
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>
                Past Partners Include:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '18px', fontFamily: "'DM Sans', sans-serif" }}>
                <div>🏢 Tech Startups in Brooklyn</div>
                <div>🎨 Creative Agencies</div>
                <div>🏥 Healthcare Organizations</div>
                <div>📚 Educational Institutions</div>
                <div>🌟 Nonprofit Teams</div>
              </div>
              <div style={{ marginTop: '32px', padding: '20px', background: '#FFF8E7', borderLeft: '4px solid #D4AF37' }}>
                <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#2C1810', fontFamily: "'DM Sans', sans-serif" }}>
                  "Our team hasn't stopped talking about this workshop. Molly created a safe space for vulnerability and growth."
                </p>
                <p style={{ fontSize: '14px', marginTop: '12px', color: '#5C4033', fontFamily: "'DM Sans', sans-serif" }}>
                  — HR Director, Brooklyn Tech Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" style={{ padding: '100px 40px', background: 'linear-gradient(180deg, #FFFBF5 0%, #FFE8CC 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, marginBottom: '16px' }}>
              Storytelling Tips & Insights
            </h2>
            <p style={{ fontSize: '20px', color: '#5C4033', fontFamily: "'DM Sans', sans-serif" }}>
              Practical wisdom from the creative trenches
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {blogPosts.map((post, index) => (
              <div key={index} style={{ 
                background: 'white', 
                border: '2px solid #2C1810',
                padding: '32px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '4px 4px 0 #D4AF37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#D4AF37', 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '12px'
                }}>
                  {post.date} · {post.readTime}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5C4033', fontFamily: "'DM Sans', sans-serif", marginBottom: '20px' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2C1810', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                  Read More <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn-secondary">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: '80px 40px', background: '#D4AF37', color: '#2C1810' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Mail size={48} style={{ marginBottom: '24px' }} />
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>
            Get Weekly Creative Prompts
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', fontFamily: "'DM Sans', sans-serif" }}>
            Join 2,000+ storytellers receiving Sunday inspiration in their inbox
          </p>
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '16px 20px',
                border: '2px solid #2C1810',
                fontSize: '16px',
                fontFamily: "'DM Sans', sans-serif",
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-primary" style={{ background: '#2C1810', color: '#FFF8E7' }}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 40px', background: '#FFFBF5' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, marginBottom: '16px' }}>
              Let's Connect
            </h2>
            <p style={{ fontSize: '20px', color: '#5C4033', fontFamily: "'DM Sans', sans-serif" }}>
              Questions? Ideas? Just want to say hi? We're all ears.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <a href="mailto:Molly@GoldenGillyArts.com" style={{ 
              background: 'white',
              border: '2px solid #2C1810',
              padding: '40px',
              textAlign: 'center',
              textDecoration: 'none',
              color: '#2C1810',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '4px 4px 0 #D4AF37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Mail size={40} style={{ marginBottom: '16px', color: '#D4AF37' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', fontFamily: "'DM Sans', sans-serif" }}>
                Email Us
              </h3>
              <p style={{ fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>
                Molly@GoldenGillyArts.com
              </p>
            </a>

            <div style={{ 
              background: 'white',
              border: '2px solid #2C1810',
              padding: '40px',
              textAlign: 'center'
            }}>
              <MapPin size={40} style={{ marginBottom: '16px', color: '#D4AF37' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', fontFamily: "'DM Sans', sans-serif" }}>
                Find Us
              </h3>
              <p style={{ fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>
                Classes across NYC<br />Brooklyn & Manhattan
              </p>
            </div>

            <div style={{ 
              background: 'white',
              border: '2px solid #2C1810',
              padding: '40px',
              textAlign: 'center'
            }}>
              <Users size={40} style={{ marginBottom: '16px', color: '#D4AF37' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', fontFamily: "'DM Sans', sans-serif" }}>
                Follow Along
              </h3>
              <p style={{ fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>
                @GoldenGillyArts<br />on Instagram
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#2C1810', color: '#FFF8E7', padding: '60px 40px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>✨</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '24px', marginBottom: '8px' }}>
            Golden Gilly Arts
          </div>
          <p style={{ fontSize: '14px', color: '#FFE8CC', marginBottom: '32px', fontFamily: "'DM Sans', sans-serif" }}>
            NYC's warmest improv community & global storytelling hub
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '32px', 
            marginBottom: '32px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            flexWrap: 'wrap'
          }}>
            <a href="#classes" style={{ color: '#FFE8CC', textDecoration: 'none' }}>Classes</a>
            <a href="#benefits" style={{ color: '#FFE8CC', textDecoration: 'none' }}>Why Improv</a>
            <a href="#corporate" style={{ color: '#FFE8CC', textDecoration: 'none' }}>Corporate</a>
            <a href="#blog" style={{ color: '#FFE8CC', textDecoration: 'none' }}>Blog</a>
          </div>
          <div style={{ 
            borderTop: '1px solid rgba(255, 232, 204, 0.2)', 
            paddingTop: '24px',
            fontSize: '14px',
            color: '#FFE8CC',
            fontFamily: "'DM Sans', sans-serif"
          }}>
            © 2026 Golden Gilly Arts. Made with ❤️ in Brooklyn.
          </div>
        </div>
        {/* Calendly badge */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </footer>
    </div>
  );
}

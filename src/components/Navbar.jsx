import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      if (scrollPos < 400) {
        setActiveSection('home');
        return;
      }

      const sections = ['work', 'recognition', 'leadership', 'concepts', 'skills', 'about', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            if (section === 'work') {
              setActiveSection('work');
            } else if (section === 'recognition') {
              setActiveSection('recognition');
            } else if (section === 'leadership') {
              setActiveSection('leadership');
            } else if (section === 'about' || section === 'skills' || section === 'concepts' || section === 'achievements') {
              setActiveSection('about');
            } else if (section === 'contact') {
              setActiveSection('contact');
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#hero' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'recognition', label: 'Recognition', href: '#recognition' },
    { id: 'leadership', label: 'Leadership', href: '#leadership' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Unified Floating Liquid Glass Navigation Capsule */}
      <header className="site-nav" role="banner" aria-label="Site Header">
        {/* Left: Piyush Sharma Wordmark */}
        <a href="#hero" className="nav-brand" aria-label="Piyush Sharma Home">
          <span className="brand-dot"></span>
          <span className="brand-text">{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation Links inside the same capsule */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle (inside the same capsule on small screens) */}
        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Compact Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav className="mobile-nav-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      <style>{`
        .site-nav {
          position: fixed;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: min(920px, calc(100% - 32px));
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 10px 7px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.95),
            0 8px 30px rgba(15, 23, 42, 0.08);
          z-index: 1000;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-brand {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
        }

        .brand-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px rgba(37, 99, 235, 0.6);
        }

        .brand-text {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #090e17;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link-pill {
          padding: 7px 16px;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          transition: all 0.18s ease;
          position: relative;
        }

        .nav-link-pill:hover {
          color: #090e17;
          background: rgba(241, 245, 249, 0.7);
        }

        /* Subtle Blue Active State: ~10% blue tint and crisp blue text */
        .nav-link-pill.active {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.09);
          font-weight: 600;
        }

        .nav-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: #090e17;
          background: rgba(241, 245, 249, 0.8);
          border: 1px solid rgba(226, 232, 240, 0.8);
          cursor: pointer;
        }

        @media (max-width: 720px) {
          .nav-links {
            display: none;
          }
          .nav-mobile-toggle {
            display: flex;
          }
          .site-nav {
            padding: 6px 8px 6px 14px;
          }
        }

        /* Compact Mobile Dropdown */
        .mobile-nav-overlay {
          position: fixed;
          top: 66px;
          left: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 12px;
          box-shadow: 0 16px 40px -10px rgba(15, 23, 42, 0.15);
          z-index: 999;
          animation: mobileFade 0.2s ease-out;
        }

        @keyframes mobileFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-nav-link {
          display: block;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
        }

        .mobile-nav-link.active {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.09);
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

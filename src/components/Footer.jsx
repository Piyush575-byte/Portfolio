import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="section-divider"></div>
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand-title">{personalInfo.name}</div>
            <p className="footer-brand-desc">
              {personalInfo.role} · B.Tech Computer Science & Engineering, IILM University (8.9 CGPA).
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-header">Navigation</span>
            <div className="footer-links-list">
              <a href="#hero" className="f-link">Home</a>
              <a href="#work" className="f-link">Selected Work</a>
              <a href="#concepts" className="f-link">Creative Concepts</a>
              <a href="#skills" className="f-link">Skills & Tools</a>
              <a href="#about" className="f-link">About & Credentials</a>
              <a href="#achievements" className="f-link">Honors & Achievements</a>
              <a href="#contact" className="f-link">Contact</a>
            </div>
          </div>

          <div className="footer-actions-col">
            <span className="footer-nav-header">Direct Contact</span>
            <div className="f-contact-item">
              <Mail size={14} className="text-blue" />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="f-contact-item">
              <Phone size={14} className="text-blue" />
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
            </div>
            <div className="f-contact-item">
              <MapPin size={14} className="text-blue" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Piyush Sharma. All rights reserved.
          </p>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrap {
          background: #f8fafc;
          padding-top: 56px;
          padding-bottom: 36px;
          margin-top: 56px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 40px;
        }

        @media (max-width: 860px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-brand-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #090e17;
        }

        .footer-brand-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 360px;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-header {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #090e17;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 700;
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .f-link {
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .f-link:hover {
          color: var(--accent-blue);
        }

        .footer-actions-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .f-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .f-contact-item a:hover {
          color: var(--accent-blue);
        }

        .text-blue {
          color: var(--accent-blue);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 7px 16px;
          border-radius: var(--radius-pill);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .back-to-top-btn:hover {
          background: #ffffff;
          border-color: rgba(147, 197, 253, 0.9);
          color: var(--accent-blue);
        }
      `}</style>
    </footer>
  );
}

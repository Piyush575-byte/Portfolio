import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=Digital%20Creative%20Designer%20(Cloud%20%26%20Security)%20-%20Piyush%20Sharma`;

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Available for the Digital Creative Designer (Cloud & Security) internship at Bluella Private Limited. Reach out directly by email or phone.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-card glass-card">
          <div className="contact-grid">
            {/* Left: Direct Inquiry Actions */}
            <div className="contact-action-col">
              <h3 className="contact-lead-text">
                Let's discuss how visual storytelling elevates cloud security.
              </h3>
              <p className="contact-lead-sub">
                Click below to open your mail client, or connect directly by phone.
              </p>

              <div className="contact-buttons-row">
                <a href={mailtoUrl} className="btn-primary">
                  <Send size={16} />
                  <span>Send Direct Email</span>
                  <ArrowUpRight size={15} />
                </a>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="btn-secondary">
                  <Phone size={16} />
                  <span>Call {personalInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Details */}
            <div className="contact-details-col">
              <div className="detail-item">
                <div className="detail-icon-box">
                  <Mail size={18} className="detail-icon" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="detail-value mail-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? <Check size={14} className="text-blue" /> : <Copy size={14} />}
                  <span className="copy-label">{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box">
                  <Phone size={18} className="detail-icon" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Phone & WhatsApp</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="detail-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedType === 'phone' ? <Check size={14} className="text-blue" /> : <Copy size={14} />}
                  <span className="copy-label">{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box">
                  <MapPin size={18} className="detail-icon" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
                <div className="location-flag-badge">
                  <span>Delhi NCR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card {
          padding: 44px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 44px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 100%;
            gap: 32px;
          }
          .contact-card {
            padding: 24px 18px;
          }
        }

        .contact-action-col,
        .contact-details-col {
          min-width: 0;
          width: 100%;
        }

        .contact-lead-text {
          font-size: clamp(1.35rem, 2.2vw, 1.75rem);
          font-weight: 700;
          color: #090e17;
          line-height: 1.25;
        }

        .contact-lead-sub {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #475569;
          margin-top: 8px;
        }

        .contact-buttons-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 20px;
        }

        @media (max-width: 600px) {
          .contact-buttons-row .btn-primary,
          .contact-buttons-row .btn-secondary {
            width: 100%;
          }
        }

        .contact-details-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(248, 250, 252, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: var(--radius-md);
          transition: border-color var(--transition-fast);
        }

        .detail-item:hover {
          border-color: rgba(147, 197, 253, 0.9);
          background: #ffffff;
        }

        .detail-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(239, 246, 255, 0.95);
          border: 1px solid rgba(191, 219, 254, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-icon {
          color: var(--accent-blue);
        }

        .detail-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          overflow: hidden;
        }

        .detail-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #64748b;
          text-transform: uppercase;
        }

        .detail-value {
          font-size: 0.925rem;
          font-weight: 600;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mail-link:hover {
          color: var(--accent-blue);
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: #475569;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          padding: 5px 10px;
          border-radius: var(--radius-pill);
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          color: #0f172a;
          border-color: rgba(147, 197, 253, 0.9);
          background: #ffffff;
        }

        .text-blue {
          color: var(--accent-blue);
        }

        .location-flag-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #1d4ed8;
          background: rgba(239, 246, 255, 0.9);
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(191, 219, 254, 0.9);
        }
      `}</style>
    </section>
  );
}

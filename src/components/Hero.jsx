import React from 'react';
import { ArrowRight, Mail, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ShowreelPlayer from './ShowreelPlayer';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline, Bio, and Liquid Glass CTAs */}
          <div className="hero-content">
            {/* Main Headline */}
            <h1 className="hero-headline">
              Designing visuals. <br />
              <span className="text-blue-accent">Editing stories.</span> <br />
              Connecting technology with people.
            </h1>

            {/* Supporting Bio */}
            <p className="hero-supporting">
              "{personalInfo.supportingBio}"
            </p>

            {/* Academic & Location Quick Chips */}
            <div className="hero-chips-row">
              <div className="frosted-chip">
                <GraduationCap size={15} className="chip-icon" />
                <span>B.Tech CSE · IILM University (8.9 CGPA)</span>
              </div>
              <div className="frosted-chip">
                <MapPin size={15} className="chip-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Primary Liquid Glass & Secondary Actions */}
            <div className="hero-actions-group">
              <a href="#work" className="btn-primary">
                <span>Explore My Work</span>
                <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn-secondary">
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: 20-30s Creative Showreel Player */}
          <div className="hero-visual-col">
            <ShowreelPlayer />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: calc(var(--header-height) + 36px);
          padding-bottom: 72px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 100%;
            gap: 40px;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
          width: 100%;
        }

        /* Big Editorial Headline */
        .hero-headline {
          font-size: clamp(2.4rem, 4.2vw, 3.5rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.04em;
          color: #090e17;
          word-break: break-word;
        }

        .text-blue-accent {
          color: #2563eb;
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Supporting Text */
        .hero-supporting {
          font-size: clamp(1.05rem, 1.25vw, 1.15rem);
          line-height: 1.65;
          color: #475569;
          max-width: 580px;
        }

        /* Frosted Chips */
        .hero-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
        }

        .frosted-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #334155;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          padding: 7px 14px;
          border-radius: var(--radius-pill);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          backdrop-filter: blur(10px);
        }

        .chip-icon {
          color: var(--accent-blue);
        }

        /* Action Buttons */
        .hero-actions-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 10px;
        }

        .hero-visual-col {
          display: flex;
          justify-content: center;
          min-width: 0;
          width: 100%;
        }

        @media (max-width: 640px) {
          .hero-headline br {
            display: none;
          }
          .hero-headline {
            font-size: 2.1rem;
            line-height: 1.18;
          }
          .hero-actions-group {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { honorsList } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section className="section-wrapper" id="achievements">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Academic & Institutional Distinctions</span>
          </div>
          <h2 className="section-title">Honors & Milestones</h2>
          <p className="section-subtitle">
            Academic competitions, institutional hackathon qualifications, and technical community leadership.
          </p>
        </div>

        {/* Clean Divided List */}
        <div className="achievements-card glass-card">
          <ul className="achievements-divided-list">
            {honorsList.map((item, index) => (
              <li key={index} className="achievement-row">
                <div className="row-main">
                  <span className="achieve-title">{item.title}</span>
                  <p className="achieve-desc">{item.description}</p>
                </div>
                <div className="row-track">
                  <span className="track-badge">{item.track}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .achievements-card {
          padding: 12px 32px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
        }

        .achievements-divided-list {
          list-style: none;
          display: flex;
          flex-direction: column;
        }

        .achievement-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          gap: 20px;
        }

        .achievement-row:last-child {
          border-bottom: none;
        }

        .row-main {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .achieve-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #090e17;
          letter-spacing: -0.015em;
        }

        .achieve-desc {
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.5;
        }

        .row-track {
          flex-shrink: 0;
        }

        .track-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-blue);
          background: rgba(239, 246, 255, 0.9);
          border: 1px solid rgba(191, 219, 254, 0.9);
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          font-weight: 600;
          white-space: nowrap;
        }

        @media (max-width: 680px) {
          .achievements-card {
            padding: 8px 18px;
          }
          .achievement-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 16px 0;
          }
        }
      `}</style>
    </section>
  );
}

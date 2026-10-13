import React, { useState } from 'react';
import { Users, Trophy, Laptop } from 'lucide-react';
import { hackathonLeadershipData } from '../data/portfolioData';
import { assetMap } from '../data/assetMap';

export default function HackIndiaLeadership() {
  const { headline, role, description, leadershipHighlights, stack } = hackathonLeadershipData;
  const [activeMediaView, setActiveMediaView] = useState('team'); // 'team' | 'app'

  return (
    <section className="section-wrapper" id="leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Competitive Distinctions</span>
          </div>
          <h2 className="section-title">Hackathon Achievement & Team Leadership</h2>
          <p className="section-subtitle">
            National hackathon distinction demonstrating collaborative technical delivery and team coordination.
          </p>
        </div>

        {/* HackIndia Editorial Card */}
        <article className="leadership-card glass-card">
          <div className="leadership-inner-layout">
            {/* Visual Column: App Showcase or Team Photo */}
            <div className="leadership-media-col">
              <div className="leadership-media-frame">
                {activeMediaView === 'app' ? (
                  <div className="app-canvas-container">
                    {/* Interactive App Window Showcase */}
                    <div className="app-window-mockup">
                      <div className="mock-window-header">
                        <div className="dots-row">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <span className="mock-url-text">hackindia.workspace/preview</span>
                        <span className="mock-badge-track">AI & Web Track</span>
                      </div>

                      <div className="mock-window-body">
                        <div className="mock-sidebar">
                          <div className="mock-nav active">Overview</div>
                          <div className="mock-nav">Workflows</div>
                          <div className="mock-nav">Engine</div>
                          <div className="mock-nav">Telemetry</div>
                        </div>

                        <div className="mock-canvas">
                          <div className="mock-canvas-top">
                            <span className="canvas-title">Intelligent Assistance Engine</span>
                            <span className="canvas-stack-tag">React · Next.js · Node.js · Antigravity</span>
                          </div>

                          <div className="mock-pipeline-grid">
                            <div className="pipeline-node">
                              <span className="node-step">01. Prompt</span>
                              <span className="node-detail">Natural Language Input</span>
                            </div>
                            <div className="pipeline-node active-node">
                              <span className="node-step">02. Antigravity</span>
                              <span className="node-detail">Autonomous Logic Synthesizer</span>
                            </div>
                            <div className="pipeline-node">
                              <span className="node-step">03. Output</span>
                              <span className="node-detail">Full-Stack Execution</span>
                            </div>
                          </div>

                          <div className="mock-footer-strip">
                            <span>Selected in IILM Internal SIH Round · 1st Runner-Up</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="team-photo-container">
                    <img
                      src={assetMap.hackindia.teamPhoto}
                      alt="HackIndia Team"
                      className="team-photo-img"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const slot = e.currentTarget.parentElement.querySelector('.team-photo-slot');
                        if (slot) slot.style.display = 'flex';
                      }}
                    />
                    <div className="team-photo-slot" style={{ display: 'none' }}>
                      <Users size={32} className="slot-icon" />
                      <span className="slot-heading">HackIndia Team Photograph</span>
                      <span className="slot-sub">
                        Place genuine photo at <code>{assetMap.hackindia.teamPhoto}</code>
                      </span>
                    </div>
                  </div>
                )}

                {/* Media Switcher */}
                <div className="media-view-toggle">
                  <button
                    type="button"
                    className={`view-btn ${activeMediaView === 'app' ? 'active' : ''}`}
                    onClick={() => setActiveMediaView('app')}
                  >
                    <Laptop size={13} />
                    <span>Application Interface</span>
                  </button>
                  <button
                    type="button"
                    className={`view-btn ${activeMediaView === 'team' ? 'active' : ''}`}
                    onClick={() => setActiveMediaView('team')}
                  >
                    <Users size={13} />
                    <span>Team Photograph</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Leadership Information Column */}
            <div className="leadership-info-col">
              <div className="distinction-pill">
                <Trophy size={14} className="trophy-icon" />
                <span className="pill-text">NATIONAL COMPETITION DISTINCTION</span>
              </div>

              <h3 className="leadership-headline">{headline}</h3>

              <div className="role-strip">
                <span className="role-title">{role}</span>
                <span className="dot-sep">·</span>
                <span className="team-label">Collaborative Full-Stack Sprint</span>
              </div>

              <p className="leadership-summary">
                {description}
              </p>

              {/* Visible Leadership & Communication Dimensions */}
              <div className="leadership-points-group">
                <span className="group-heading">Leadership & Team Communication</span>
                <ul className="leadership-list">
                  {leadershipHighlights.map((point, idx) => (
                    <li key={idx} className="leadership-item">
                      <span className="item-bullet"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Strip */}
              <div className="tech-stack-strip">
                <span className="stack-label">Stack:</span>
                <span className="stack-value">{stack}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <style>{`
        .leadership-card {
          padding: 32px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
        }

        .leadership-inner-layout {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 36px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .leadership-inner-layout {
            grid-template-columns: 100%;
            gap: 24px;
          }
          .leadership-card {
            padding: 22px;
          }
        }

        .leadership-media-col {
          width: 100%;
          min-width: 0;
        }

        .leadership-media-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          display: flex;
          flex-direction: column;
        }

        .app-canvas-container,
        .team-photo-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #f8fafc;
          overflow: hidden;
          display: flex;
        }

        .app-window-mockup {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .mock-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .dots-row {
          display: flex;
          gap: 5px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .mock-url-text {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #64748b;
        }

        .mock-badge-track {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #2563eb;
          font-weight: 700;
        }

        .mock-window-body {
          display: grid;
          grid-template-columns: 130px 1fr;
          flex: 1;
        }

        .mock-sidebar {
          background: #f8fafc;
          border-right: 1px solid #e2e8f0;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mock-nav {
          font-size: 0.72rem;
          padding: 6px 10px;
          border-radius: 6px;
          color: #64748b;
          font-weight: 500;
        }

        .mock-nav.active {
          background: #ffffff;
          color: #2563eb;
          font-weight: 700;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .mock-canvas {
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
        }

        .mock-canvas-top {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .canvas-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #090e17;
        }

        .canvas-stack-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #2563eb;
        }

        .mock-pipeline-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .pipeline-node {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .active-node {
          background: rgba(239, 246, 255, 0.85);
          border-color: rgba(191, 219, 254, 0.95);
        }

        .node-step {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: #64748b;
        }

        .node-detail {
          font-size: 0.7rem;
          font-weight: 600;
          color: #090e17;
        }

        .mock-footer-strip {
          background: rgba(239, 246, 255, 0.85);
          border: 1px dashed rgba(191, 219, 254, 0.95);
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 0.68rem;
          color: #1d4ed8;
          text-align: center;
          font-weight: 600;
        }

        .team-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-photo-slot {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #ffffff;
          padding: 24px;
          text-align: center;
        }

        .slot-icon {
          color: #60a5fa;
        }

        .slot-heading {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #ffffff;
        }

        .slot-sub {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .slot-sub code {
          font-family: var(--font-mono);
          color: #93c5fd;
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .media-view-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          background: #ffffff;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
        }

        .view-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          border: 1px solid rgba(226, 232, 240, 0.9);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .view-btn.active {
          color: #2563eb;
          background: rgba(239, 246, 255, 0.95);
          border-color: rgba(191, 219, 254, 0.95);
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08);
        }

        .leadership-info-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-width: 0;
        }

        .distinction-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          background: rgba(239, 246, 255, 0.9);
          border: 1px solid rgba(191, 219, 254, 0.9);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
        }

        .trophy-icon {
          color: #2563eb;
        }

        .pill-text {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: #1d4ed8;
          letter-spacing: 0.04em;
        }

        .leadership-headline {
          font-size: clamp(1.4rem, 2vw, 1.75rem);
          font-weight: 700;
          color: #090e17;
          letter-spacing: -0.025em;
          line-height: 1.25;
        }

        .role-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: #475569;
        }

        .role-title {
          color: #2563eb;
          font-weight: 600;
        }

        .dot-sep {
          color: #cbd5e1;
        }

        .team-label {
          color: #334155;
          font-weight: 500;
        }

        .leadership-summary {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #334155;
        }

        .leadership-points-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .group-heading {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .leadership-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .leadership-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.45;
        }

        .item-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          flex-shrink: 0;
          margin-top: 6px;
        }

        .tech-stack-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 10px;
          border-top: 1px solid rgba(226, 232, 240, 0.85);
          font-size: 0.85rem;
        }

        .stack-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 600;
        }

        .stack-value {
          color: #0f172a;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}

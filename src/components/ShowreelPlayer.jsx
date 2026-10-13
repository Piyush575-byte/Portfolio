import React from 'react';
import { Film, Play } from 'lucide-react';

export default function ShowreelPlayer() {
  return (
    <div className="showreel-container-wrap">
      <div className="showreel-card">
        {/* Premium Designed Static Showreel Placeholder */}
        <div className="showreel-screen showreel-placeholder-screen">
          {/* Subtle Blue Ambient Lighting */}
          <div className="ambient-blue-glow" />

          {/* Top Status Bar: Liquid Glass Status Pill */}
          <div className="placeholder-top-bar">
            <div className="liquid-glass-status-pill">
              <span className="ambient-pulse-dot" />
              <span className="status-label-text">SHOWREEL COMING SOON</span>
            </div>
          </div>

          {/* Center Content: Centered Film/Play Icon & Clean Typography */}
          <div className="placeholder-center-stage">
            <div className="center-icon-badge">
              <Film size={26} className="film-symbol" />
              <Play size={13} className="play-symbol" />
            </div>

            <div className="placeholder-typography">
              <h3 className="main-showreel-label">CREATIVE SHOWREEL</h3>
              <p className="supporting-showreel-label">
                Video editing · Motion graphics · Visual storytelling
              </p>
            </div>
          </div>

          {/* Bottom Bar: Clean Instructional Note */}
          <div className="placeholder-bottom-bar">
            <span className="hover-instruction-note">
              Hover to preview project videos below
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .showreel-container-wrap {
          width: 100%;
          max-width: 540px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center center;
        }

        .showreel-card {
          width: 100%;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 
            0 24px 50px -15px rgba(37, 99, 235, 0.12),
            0 4px 16px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          position: relative;
        }

        .showreel-placeholder-screen {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #090e17;
          background: radial-gradient(circle at 50% 42%, rgba(37, 99, 235, 0.18) 0%, rgba(15, 23, 42, 0.95) 55%, #070b12 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .ambient-blue-glow {
          position: absolute;
          top: -30%;
          left: 20%;
          width: 60%;
          height: 120%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .placeholder-top-bar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          z-index: 2;
        }

        .liquid-glass-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          padding: 6px 14px;
          border-radius: 999px;
        }

        .ambient-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 8px #3b82f6;
        }

        .status-label-text {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #93c5fd;
          text-transform: uppercase;
        }

        .placeholder-center-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 16px;
          z-index: 2;
          margin: auto 0;
        }

        .center-icon-badge {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.35),
            0 10px 24px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .film-symbol {
          color: #93c5fd;
          opacity: 0.9;
        }

        .play-symbol {
          position: absolute;
          color: #ffffff;
          fill: #ffffff;
          margin-left: 2px;
        }

        .placeholder-typography {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 380px;
        }

        .main-showreel-label {
          font-size: clamp(1.2rem, 1.8vw, 1.45rem);
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .supporting-showreel-label {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #94a3b8;
          line-height: 1.4;
          margin: 0;
        }

        .placeholder-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .hover-instruction-note {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #64748b;
          letter-spacing: 0.03em;
        }
      `}</style>
    </div>
  );
}

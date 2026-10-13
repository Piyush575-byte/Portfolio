import React, { useState } from 'react';
import { Film, Shield, Layers, Play, Cpu, CheckCircle2, Sparkles, Droplet } from 'lucide-react';

export default function AbstractHeroVisual() {
  const [activeTab, setActiveTab] = useState('motion'); // 'motion' | 'security'

  return (
    <div className="hero-liquid-composition">
      {/* 3D Liquid Glass Caustic Sphere & Fluid Wave Background Art */}
      <div className="liquid-orb-canvas">
        <svg viewBox="0 0 460 380" className="caustic-waves-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            {/* Fluid Wave Gradients */}
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.75" />
            </linearGradient>

            {/* Refraction Sphere Lens Gradient */}
            <radialGradient id="sphereLens" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#e0f2fe" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#93c5fd" stopOpacity="0.35" />
              <stop offset="85%" stopColor="#60a5fa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.85" />
            </radialGradient>

            {/* Specular Glint Highlight */}
            <radialGradient id="glintGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Caustic Wave Ribbons */}
          <path
            d="M 20 280 C 110 200, 220 320, 360 210 C 420 160, 460 210, 480 230 L 480 380 L 0 380 Z"
            fill="url(#waveGrad2)"
            opacity="0.55"
          />
          <path
            d="M 50 320 C 140 230, 260 290, 380 180 C 420 140, 450 170, 470 190"
            fill="none"
            stroke="url(#waveGrad1)"
            strokeWidth="28"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* 3D Liquid Glass Refraction Sphere (Faithful to Reference Sheet) */}
          <g transform="translate(310, 160)" className="floating-liquid-orb">
            {/* Outer Soft Ambient Glow */}
            <circle cx="0" cy="0" r="88" fill="rgba(96, 165, 250, 0.25)" filter="blur(16px)" />
            
            {/* Caustic Shadow Beneath Orb */}
            <ellipse cx="10" cy="85" rx="65" ry="18" fill="rgba(37, 99, 235, 0.18)" filter="blur(10px)" />

            {/* Main Refractive Glass Body */}
            <circle cx="0" cy="0" r="76" fill="url(#sphereLens)" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="2" />

            {/* Inner Refraction Wave Ribbon Inside Sphere */}
            <path
              d="M -55 25 C -20 -15, 25 45, 58 5"
              fill="none"
              stroke="rgba(255, 255, 255, 0.65)"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M -40 38 C -10 10, 30 55, 52 28"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.45"
            />

            {/* Primary Specular Light Glint (Top-Left Reflection) */}
            <ellipse cx="-28" cy="-28" rx="20" ry="11" transform="rotate(-35 -28 -28)" fill="url(#glintGlow)" />
            <circle cx="-38" cy="-35" r="4" fill="#ffffff" />

            {/* Secondary Refraction Rim Light (Bottom-Right Caustic) */}
            <path
              d="M -25 65 A 72 72 0 0 0 65 -15"
              fill="none"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.9"
            />
          </g>
        </svg>
      </div>

      {/* Frosted Glassmorphism Studio Card (Foreground, Matte, Refined) */}
      <div className="frosted-studio-card glass-card">
        {/* Studio Window Chrome */}
        <div className="studio-chrome">
          <div className="chrome-dots">
            <span className="dot dot-blue"></span>
            <span className="dot dot-sky"></span>
            <span className="dot dot-muted"></span>
          </div>
          <span className="chrome-title">STUDIO COMPOSER · V3.8</span>
          <div className="chrome-tabs-pill">
            <button
              type="button"
              className={`studio-tab-btn ${activeTab === 'motion' ? 'active' : ''}`}
              onClick={() => setActiveTab('motion')}
            >
              <Film size={12} />
              <span>Motion</span>
            </button>
            <button
              type="button"
              className={`studio-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <Shield size={12} />
              <span>Cloud & Security</span>
            </button>
          </div>
        </div>

        {/* Studio Viewport */}
        <div className="studio-viewport">
          {activeTab === 'motion' ? (
            <div className="motion-studio-body">
              {/* Monitor Preview Frame */}
              <div className="studio-monitor">
                <div className="monitor-top-chip">
                  <span className="rec-live-dot"></span>
                  <span>4K PRORES · 60 FPS</span>
                </div>

                <div className="monitor-wave-art">
                  <svg viewBox="0 0 340 100" className="monitor-svg" preserveAspectRatio="xMidYMid meet">
                    {/* Motion Curve Path */}
                    <path d="M 30 75 C 90 20, 190 95, 300 30" fill="none" stroke="rgba(37, 99, 235, 0.45)" strokeWidth="2.5" />
                    <circle cx="30" cy="75" r="4" fill="#3b82f6" />
                    <circle cx="140" cy="50" r="5" fill="#2563eb" />
                    <circle cx="230" cy="70" r="4" fill="#60a5fa" />
                    <circle cx="300" cy="30" r="5" fill="#3b82f6" />

                    {/* Composition Keyframe Card */}
                    <rect x="105" y="30" width="130" height="42" rx="8" fill="rgba(255, 255, 255, 0.92)" stroke="rgba(191, 219, 254, 0.8)" strokeWidth="1" />
                    <text x="170" y="48" fill="#0f172a" fontSize="9" fontWeight="700" textAnchor="middle">VISUAL STORY</text>
                    <text x="170" y="61" fill="#64748b" fontSize="7.5" fontFamily="monospace" textAnchor="middle">KEYFRAME 01:24 · SYNC</text>
                  </svg>
                </div>

                <div className="monitor-bottom-time">
                  <span className="time-code">00:04:18:24</span>
                  <span className="time-badge">PREMIERE & AFTER EFFECTS</span>
                </div>
              </div>

              {/* Timeline Track Rows */}
              <div className="studio-tracks-wrap">
                <div className="studio-track-row">
                  <span className="track-id">V1</span>
                  <div className="track-bar-lane">
                    <div className="track-clip clip-primary" style={{ width: '45%' }}>
                      <span>OPI_Lecture_Master_03</span>
                    </div>
                    <div className="track-clip clip-cyan" style={{ width: '40%' }}>
                      <span>Motion_Title_Sequences</span>
                    </div>
                  </div>
                </div>

                <div className="studio-track-row">
                  <span className="track-id">V2</span>
                  <div className="track-bar-lane">
                    <div className="track-clip clip-muted" style={{ width: '28%' }}>
                      <span>Lower_Thirds</span>
                    </div>
                    <div className="track-clip clip-soft" style={{ width: '52%' }}>
                      <span>Cloud_Infographic_Layers</span>
                    </div>
                  </div>
                </div>

                <div className="studio-track-row audio-row">
                  <span className="track-id">A1</span>
                  <div className="track-bar-lane audio-lane">
                    <div className="audio-bars">
                      {[30, 60, 45, 80, 50, 70, 90, 40, 65, 85, 35, 75, 55, 95, 60, 40, 70, 85, 50, 65, 80, 45, 60, 75, 40].map((h, i) => (
                        <span key={i} className="wave-bar" style={{ height: `${h}%` }}></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="security-studio-body">
              <div className="security-canvas-wrap">
                <svg viewBox="0 0 340 160" className="monitor-svg" preserveAspectRatio="xMidYMid meet">
                  <rect x="15" y="15" width="310" height="130" rx="12" fill="rgba(248, 250, 252, 0.9)" stroke="rgba(191, 219, 254, 0.8)" strokeWidth="1" />
                  
                  {/* Central Zero Trust Hub */}
                  <circle cx="170" cy="80" r="28" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                  <circle cx="170" cy="80" r="36" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Connectors */}
                  <line x1="75" y1="50" x2="142" y2="72" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
                  <line x1="75" y1="110" x2="142" y2="88" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
                  <line x1="198" y1="72" x2="265" y2="50" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
                  <line x1="198" y1="88" x2="265" y2="110" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />

                  {/* Left Nodes */}
                  <rect x="40" y="38" width="65" height="24" rx="6" fill="#ffffff" stroke="rgba(203, 213, 225, 0.8)" />
                  <text x="72" y="54" fill="#475569" fontSize="7" fontFamily="monospace" textAnchor="middle">EDGE INGEST</text>

                  <rect x="40" y="98" width="65" height="24" rx="6" fill="#ffffff" stroke="rgba(203, 213, 225, 0.8)" />
                  <text x="72" y="114" fill="#475569" fontSize="7" fontFamily="monospace" textAnchor="middle">MEDIA VAULT</text>

                  {/* Center Node */}
                  <text x="170" y="78" fill="#0f172a" fontSize="8" fontWeight="700" textAnchor="middle">ZERO-TRUST</text>
                  <text x="170" y="89" fill="#2563eb" fontSize="7" fontFamily="monospace" textAnchor="middle">GATEWAY</text>

                  {/* Right Nodes */}
                  <rect x="235" y="38" width="65" height="24" rx="6" fill="#ffffff" stroke="rgba(96, 165, 250, 0.8)" />
                  <text x="267" y="54" fill="#2563eb" fontSize="7" fontFamily="monospace" textAnchor="middle">CLOUD ENCLAVE</text>

                  <rect x="235" y="98" width="65" height="24" rx="6" fill="#ffffff" stroke="rgba(203, 213, 225, 0.8)" />
                  <text x="267" y="114" fill="#475569" fontSize="7" fontFamily="monospace" textAnchor="middle">AUDIT TELEM</text>
                </svg>
              </div>

              <div className="security-badges-bar">
                <span className="sec-pill">
                  <CheckCircle2 size={12} className="text-blue" />
                  <span>Cloud Fundamentals</span>
                </span>
                <span className="sec-pill">
                  <Shield size={12} className="text-blue" />
                  <span>Cybersecurity Basics</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Studio Footer Bar */}
        <div className="studio-footer-strip">
          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>CREATIVE PRODUCTION × CLOUD SECURITY STORYTELLING</span>
          </div>
          <span className="footer-sig">PIYUSH SHARMA · 2026</span>
        </div>
      </div>

      <style>{`
        .hero-liquid-composition {
          position: relative;
          width: 100%;
          max-width: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Ambient Wave Canvas with Refraction Orb */
        .liquid-orb-canvas {
          position: absolute;
          inset: -40px -30px -40px -30px;
          pointer-events: none;
          z-index: 0;
          overflow: visible;
        }

        .caustic-waves-svg {
          width: 100%;
          height: 100%;
        }

        .floating-liquid-orb {
          filter: drop-shadow(0 20px 30px rgba(37, 99, 235, 0.22));
          animation: orbFloat 6s ease-in-out infinite alternate;
        }

        @keyframes orbFloat {
          0% { transform: translate(310px, 160px) scale(1); }
          100% { transform: translate(314px, 150px) scale(1.03); }
        }

        /* Frosted Glassmorphism Studio Card */
        .frosted-studio-card {
          position: relative;
          z-index: 1;
          width: 100%;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: var(--radius-xl);
          box-shadow: 0 24px 55px -15px rgba(37, 99, 235, 0.12), 0 2px 8px rgba(0, 0, 0, 0.03);
          overflow: hidden;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .frosted-studio-card:hover {
          box-shadow: 0 30px 65px -16px rgba(37, 99, 235, 0.18);
        }

        /* Chrome Bar */
        .studio-chrome {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(248, 250, 252, 0.85);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          gap: 10px;
          flex-wrap: wrap;
        }

        .chrome-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .dot-blue { background: #3b82f6; }
        .dot-sky { background: #60a5fa; }
        .dot-muted { background: #cbd5e1; }

        .chrome-title {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          font-weight: 600;
        }

        .chrome-tabs-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.9);
          padding: 3px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .studio-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          font-size: 0.725rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .studio-tab-btn:hover {
          color: var(--text-primary);
        }

        .studio-tab-btn.active {
          background: var(--liquid-btn-bg);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
        }

        /* Viewport Area */
        .studio-viewport {
          padding: 18px;
          min-height: 280px;
        }

        .studio-monitor {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: var(--radius-md);
          padding: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
          margin-bottom: 14px;
        }

        .monitor-top-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #475569;
          font-weight: 600;
        }

        .rec-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px #2563eb;
        }

        .monitor-wave-art {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .monitor-svg {
          width: 100%;
          height: 100%;
        }

        .monitor-bottom-time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          margin-top: 4px;
        }

        .time-code {
          color: var(--accent-blue);
          font-weight: 700;
        }

        .time-badge {
          color: var(--text-muted);
          font-size: 0.65rem;
        }

        /* Tracks */
        .studio-tracks-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(248, 250, 252, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: var(--radius-md);
          padding: 10px;
        }

        .studio-track-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .track-id {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #64748b;
          font-weight: 600;
          width: 20px;
        }

        .track-bar-lane {
          flex: 1;
          min-width: 0;
          height: 22px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 2px 4px;
          overflow: hidden;
        }

        .track-clip {
          height: 100%;
          min-width: 0;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding: 0 8px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clip-primary {
          background: rgba(219, 234, 254, 0.9);
          border: 1px solid rgba(147, 197, 253, 0.9);
          color: #1d4ed8;
          font-weight: 600;
        }

        .clip-cyan {
          background: rgba(224, 242, 254, 0.9);
          border: 1px solid rgba(186, 230, 253, 0.9);
          color: #0369a1;
        }

        .clip-muted {
          background: rgba(241, 245, 249, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          color: #475569;
        }

        .clip-soft {
          background: rgba(239, 246, 255, 0.9);
          border: 1px solid rgba(191, 219, 254, 0.9);
          color: #2563eb;
        }

        .audio-lane {
          background: rgba(239, 246, 255, 0.7);
        }

        .audio-bars {
          display: flex;
          align-items: center;
          gap: 3px;
          width: 100%;
          height: 14px;
        }

        .wave-bar {
          flex: 1;
          background: #3b82f6;
          border-radius: 1px;
          opacity: 0.8;
        }

        /* Security Body */
        .security-studio-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .security-canvas-wrap {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: var(--radius-md);
          padding: 10px;
        }

        .security-badges-bar {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .sec-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #334155;
          background: rgba(248, 250, 252, 0.9);
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(226, 232, 240, 0.9);
        }

        .text-blue {
          color: var(--accent-blue);
        }

        /* Footer Strip */
        .studio-footer-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px;
          background: rgba(248, 250, 252, 0.9);
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          font-size: 0.68rem;
        }

        .footer-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px #2563eb;
        }

        .footer-sig {
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Shield, Activity, Lock, ArrowRight, RefreshCw } from 'lucide-react';

export default function CreativeConcepts() {
  // Carousel state for Concept B
  const [currentSlide, setCurrentSlide] = useState(0);

  // Workflow step state for Concept C
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const carouselSlides = [
    {
      slideNum: "01",
      topic: "THE CLOUD IAM CHALLENGE",
      title: "The Principle of Least Privilege (PoLP)",
      subtitle: "Why excessive permissions remain the leading cause of cloud security incidents.",
      body: "In modern multi-cloud environments, broad permissions granted for developer convenience often persist indefinitely, exposing massive blast radiuses if credentials leak."
    },
    {
      slideNum: "02",
      topic: "THE RISK PATTERN",
      title: "Wildcard Privileges vs. Scoped Roles",
      subtitle: "Comparing default administrator access with role-specific definitions.",
      body: "Granting 's3:*' or 'iam:*' allows unconstrained read, write, and deletion rights. Scoping permissions to precise resource ARNs limits an adversary's lateral movement immediately."
    },
    {
      slideNum: "03",
      topic: "THE REMEDIATION PATTERN",
      title: "Just-In-Time (JIT) Ephemeral Elevation",
      subtitle: "Granting temporary privilege with automatic expiration.",
      body: "Engineers request elevated rights on-demand for operational incidents. Sessions automatically expire after 60 minutes, ensuring zero permanent high-privilege credentials exist."
    },
    {
      slideNum: "04",
      topic: "EXECUTIVE SUMMARY",
      title: "Actionable Cloud Security Takeaways",
      subtitle: "Four operational habits for resilient cloud infrastructure.",
      body: "1. Audit unused permissions quarterly. 2. Enforce MFA across all IAM users. 3. Enforce JIT escalation for production. 4. Automate policy pruning using cloud telemetry."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Telemetry Ingestion",
      desc: "Aggregating VPC flow logs, cloud audit trails, and container events into a unified logging pipeline."
    },
    {
      step: "02",
      title: "Behavioral Detection",
      desc: "Correlating telemetry against baseline access patterns to flag unauthorized privilege escalations and suspicious API calls."
    },
    {
      step: "03",
      title: "Automated Quarantine",
      desc: "Triggering automated serverless webhooks to isolate compromised container pods and revoke active session tokens in under 10 seconds."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section className="section-wrapper" id="concepts">
      <div className="container">
        {/* Section Header with collective self-initiated labeling */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Design Concepts</span>
          </div>
          <h2 className="section-title">Creative Concepts</h2>
          <p className="section-subtitle">
            Self-initiated design concepts and visual research in cloud infrastructure, cybersecurity storytelling, and motion graphics.
          </p>
        </div>

        {/* 3 Finished Creative Concepts Grid */}
        <div className="concepts-list">
          {/* Concept A: Cloud Security Campaign Poster */}
          <article className="concept-row-card glass-card">
            <div className="concept-layout">
              {/* Visual Composition: Swiss-Grid Editorial Poster */}
              <div className="concept-poster-visual">
                <div className="poster-frame">
                  <div className="poster-header-strip">
                    <span className="p-brand">ZERO TRUST ARCHITECTURE</span>
                    <span className="p-year">EDITION 2026</span>
                  </div>

                  <div className="poster-hero-copy">
                    <div className="p-super">CLOUD SECURITY PRINCIPLE</div>
                    <h4 className="p-headline">Default Deny.<br />Cryptographic Verification.</h4>
                  </div>

                  {/* Poster Technical Schematic */}
                  <div className="poster-schematic">
                    <svg viewBox="0 0 340 160" className="poster-svg" preserveAspectRatio="xMidYMid meet">
                      <rect x="10" y="10" width="320" height="140" rx="8" fill="#ffffff" stroke="rgba(226, 232, 240, 0.9)" />
                      {/* Grid Lines */}
                      <line x1="10" y1="50" x2="330" y2="50" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="1" />
                      <line x1="10" y1="110" x2="330" y2="110" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="1" />
                      <line x1="110" y1="10" x2="110" y2="150" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="1" />
                      <line x1="230" y1="10" x2="230" y2="150" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="1" />

                      {/* Node 1: Untrusted Ingress */}
                      <circle cx="60" cy="80" r="22" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
                      <text x="60" y="78" fill="#1e3a8a" fontSize="7" fontWeight="700" textAnchor="middle">INGRESS</text>
                      <text x="60" y="88" fill="#2563eb" fontSize="6" fontFamily="monospace" textAnchor="middle">TLS 1.3</text>

                      {/* Connection arrow */}
                      <line x1="82" y1="80" x2="148" y2="80" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 2" />

                      {/* Node 2: Policy Engine (Center) */}
                      <circle cx="170" cy="80" r="26" fill="#1d4ed8" stroke="#ffffff" strokeWidth="2" />
                      <text x="170" y="78" fill="#ffffff" fontSize="7.5" fontWeight="800" textAnchor="middle">POLICY ENGINE</text>
                      <text x="170" y="88" fill="#93c5fd" fontSize="6" fontFamily="monospace" textAnchor="middle">VERIFIED</text>

                      {/* Connection arrow */}
                      <line x1="196" y1="80" x2="258" y2="80" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 2" />

                      {/* Node 3: Microsegment Enclave */}
                      <circle cx="280" cy="80" r="22" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
                      <text x="280" y="78" fill="#14532d" fontSize="7" fontWeight="700" textAnchor="middle">ENCLAVE</text>
                      <text x="280" y="88" fill="#16a34a" fontSize="6" fontFamily="monospace" textAnchor="middle">ISOLATED</text>
                    </svg>
                  </div>

                  <div className="poster-footer-strip">
                    <span>MICRO-SEGMENTATION · MUTUAL TLS · EPHEMERAL TOKENS</span>
                    <span>EDITORIAL DESIGN</span>
                  </div>
                </div>
              </div>

              {/* Editorial Description Column */}
              <div className="concept-text-col">
                <span className="concept-subheading">Concept A · Campaign Poster</span>
                <h3 className="concept-heading">Cloud Security Architecture Poster</h3>
                <p className="concept-paragraph">
                  A high-impact Swiss-grid tech poster translating complex zero-trust security principles into an intuitive visual metaphor. 
                  Designed for developer awareness and technical enterprise campaigns with clean typography and precise node geometry.
                </p>
                <div className="concept-tools-row">
                  <span className="concept-tools-label">Tools:</span>
                  <span className="concept-tools-val">Adobe Illustrator · Figma</span>
                </div>
              </div>
            </div>
          </article>

          {/* Concept B: LinkedIn Educational Carousel */}
          <article className="concept-row-card glass-card">
            <div className="concept-layout">
              {/* Interactive Carousel Canvas */}
              <div className="concept-carousel-visual">
                <div className="carousel-slide-card">
                  {/* Slide Top Meta */}
                  <div className="c-slide-top">
                    <span className="c-topic-badge">{carouselSlides[currentSlide].topic}</span>
                    <span className="c-slide-counter">Slide {carouselSlides[currentSlide].slideNum} / 04</span>
                  </div>

                  {/* Slide Content */}
                  <div className="c-slide-body">
                    <h4 className="c-slide-title">{carouselSlides[currentSlide].title}</h4>
                    <p className="c-slide-sub">{carouselSlides[currentSlide].subtitle}</p>
                    <p className="c-slide-body-text">{carouselSlides[currentSlide].body}</p>
                  </div>

                  {/* Slide Navigation Controls */}
                  <div className="c-slide-bottom">
                    <div className="c-dots-row">
                      {carouselSlides.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`c-dot ${currentSlide === idx ? 'active' : ''}`}
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Jump to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="c-nav-buttons">
                      <button
                        type="button"
                        className="c-btn"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        className="c-btn"
                        onClick={nextSlide}
                        aria-label="Next slide"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concept B Narrative */}
              <div className="concept-text-col">
                <span className="concept-subheading">Concept B · LinkedIn Carousel</span>
                <h3 className="concept-heading">Principle of Least Privilege (PoLP)</h3>
                <p className="concept-paragraph">
                  A four-slide educational social carousel tailored for B2B tech feeds. 
                  Breaks down granular cloud IAM policies, wildcard credential risks, and just-in-time access into digestible, visually consistent cards.
                </p>
                <div className="concept-tools-row">
                  <span className="concept-tools-label">Tools:</span>
                  <span className="concept-tools-val">Figma · Adobe Photoshop · Canva</span>
                </div>
              </div>
            </div>
          </article>

          {/* Concept C: Security Monitoring Workflow Visual */}
          <article className="concept-row-card glass-card">
            <div className="concept-layout">
              {/* Interactive Workflow Canvas */}
              <div className="concept-workflow-visual">
                <div className="workflow-board">
                  {/* Step Selector Pills */}
                  <div className="workflow-step-pills">
                    {workflowSteps.map((step, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`wf-tab ${activeWorkflowStep === idx ? 'active' : ''}`}
                        onClick={() => setActiveWorkflowStep(idx)}
                      >
                        <span>Step {step.step}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Step Visual Display */}
                  <div className="workflow-active-display">
                    <div className="wf-diagram-box">
                      <div className="wf-node-icon">
                        {activeWorkflowStep === 0 && <Activity size={24} className="text-blue" />}
                        {activeWorkflowStep === 1 && <Shield size={24} className="text-blue" />}
                        {activeWorkflowStep === 2 && <Lock size={24} className="text-blue" />}
                      </div>
                      <div className="wf-step-info">
                        <span className="wf-step-title">{workflowSteps[activeWorkflowStep].title}</span>
                        <p className="wf-step-desc">{workflowSteps[activeWorkflowStep].desc}</p>
                      </div>
                    </div>

                    <div className="wf-telemetry-indicator">
                      <span className="wf-pulse-dot"></span>
                      <span>Automated Pipeline · Sub-10s Containment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concept C Narrative */}
              <div className="concept-text-col">
                <span className="concept-subheading">Concept C · Infographic & Motion</span>
                <h3 className="concept-heading">Security Monitoring & Quarantine Pipeline</h3>
                <p className="concept-paragraph">
                  Visual storytelling explaining an incident containment pipeline from raw VPC flow ingestion to automated threat quarantine. 
                  Demonstrates how technical architectures can be presented clearly to stakeholders.
                </p>
                <div className="concept-tools-row">
                  <span className="concept-tools-label">Tools:</span>
                  <span className="concept-tools-val">Adobe After Effects · Illustrator · Figma</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        .concepts-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .concept-row-card {
          padding: 32px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .concept-row-card:hover {
          transform: translateY(-2px);
          border-color: rgba(147, 197, 253, 0.9);
          box-shadow: var(--shadow-card-hover);
        }

        .concept-layout {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 36px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .concept-layout {
            grid-template-columns: 100%;
            gap: 24px;
          }
          .concept-row-card {
            padding: 22px;
          }
        }

        .concept-text-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .concept-subheading {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 600;
        }

        .concept-heading {
          font-size: clamp(1.35rem, 1.8vw, 1.65rem);
          font-weight: 700;
          color: #090e17;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }

        .concept-paragraph {
          font-size: 0.9375rem;
          color: #475569;
          line-height: 1.6;
        }

        .concept-tools-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 10px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          font-size: 0.85rem;
        }

        .concept-tools-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 600;
        }

        .concept-tools-val {
          color: #0f172a;
          font-weight: 500;
        }

        /* Concept A: Poster Frame */
        .concept-poster-visual {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .poster-frame {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .poster-header-strip {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #64748b;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          padding-bottom: 6px;
        }

        .p-brand {
          font-weight: 700;
          color: #1d4ed8;
        }

        .poster-hero-copy {
          margin-top: 8px;
        }

        .p-super {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: #3b82f6;
          font-weight: 600;
        }

        .p-headline {
          font-size: 1.15rem;
          font-weight: 800;
          color: #090e17;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .poster-schematic {
          margin: 6px 0;
        }

        .poster-svg {
          width: 100%;
          height: 90px;
        }

        .poster-footer-strip {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: #94a3b8;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          padding-top: 6px;
        }

        /* Concept B: Carousel Card */
        .concept-carousel-visual {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }

        .carousel-slide-card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .c-slide-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .c-topic-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: #1d4ed8;
          background: rgba(239, 246, 255, 0.9);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .c-slide-counter {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #64748b;
        }

        .c-slide-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin: auto 0;
        }

        .c-slide-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #090e17;
          line-height: 1.25;
        }

        .c-slide-sub {
          font-size: 0.8rem;
          font-weight: 600;
          color: #2563eb;
        }

        .c-slide-body-text {
          font-size: 0.8rem;
          color: #475569;
          line-height: 1.5;
        }

        .c-slide-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          padding-top: 12px;
        }

        .c-dots-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .c-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .c-dot.active {
          background: #2563eb;
          transform: scale(1.2);
        }

        .c-nav-buttons {
          display: flex;
          gap: 6px;
        }

        .c-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(241, 245, 249, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #334155;
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .c-btn:hover {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        /* Concept C: Workflow Board */
        .concept-workflow-visual {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 16px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .workflow-board {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .workflow-step-pills {
          display: flex;
          gap: 8px;
        }

        .wf-tab {
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          background: rgba(241, 245, 249, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .wf-tab.active {
          color: #ffffff;
          background: #2563eb;
          border-color: #2563eb;
        }

        .workflow-active-display {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin: auto 0;
        }

        .wf-diagram-box {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          padding: 16px;
        }

        .wf-node-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(239, 246, 255, 0.9);
          border: 1px solid rgba(191, 219, 254, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wf-step-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .wf-step-title {
          font-size: 1rem;
          font-weight: 700;
          color: #090e17;
        }

        .wf-step-desc {
          font-size: 0.78rem;
          color: #475569;
          line-height: 1.45;
        }

        .wf-telemetry-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #1d4ed8;
        }

        .wf-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px #2563eb;
        }

        .text-blue {
          color: #2563eb;
        }
      `}</style>
    </section>
  );
}

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function AssetGuideModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="guide-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="guide-modal-window glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="guide-header">
          <div className="guide-header-title">
            <span className="badge badge-cyan">Developer & Designer Handbook</span>
            <h2 className="guide-title">How to Replace Placeholders with Real Work</h2>
          </div>
          <button
            type="button"
            className="guide-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="guide-body">
          {/* Step 1 */}
          <div className="guide-step-card">
            <div className="step-num-box">01</div>
            <div className="step-content">
              <h3 className="step-title">Place Your Media Files in the Public Directory</h3>
              <p className="step-desc">
                Export your high-resolution thumbnails, motion clips, or posters from Premiere / After Effects / Figma into:
              </p>
              <div className="code-block">
                <code>portfolio/public/assets/projects/</code>
              </div>
              <ul className="step-bullets">
                <li><strong>OPI Lecture Series:</strong> Save video thumbnail or Premiere timeline capture as <code>opi-thumbnail.jpg</code> (1920×1080).</li>
                <li><strong>ICRA Modules:</strong> Save course deck or slide presentation as <code>icra-cover.png</code>.</li>
                <li><strong>HackIndia:</strong> Save your app screenshot as <code>hackindia-ui.png</code>.</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="guide-step-card">
            <div className="step-num-box">02</div>
            <div className="step-content">
              <h3 className="step-title">Update the Data File</h3>
              <p className="step-desc">
                Open <code>src/data/portfolioData.js</code> and add your image path to any project:
              </p>
              <div className="code-block">
                <code>
                  imageUrl: "/assets/projects/opi-thumbnail.jpg"
                </code>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="guide-step-card">
            <div className="step-num-box">03</div>
            <div className="step-content">
              <h3 className="step-title">How to Deploy Publicly (Fast & Free)</h3>
              <p className="step-desc">
                When you are ready to get a public link to share with Bluella:
              </p>
              <div className="deploy-options-list">
                <div className="deploy-opt">
                  <span className="opt-name">Option A: Vercel (Recommended — 2 minutes)</span>
                  <p className="opt-detail">Push code to GitHub and import the repo at <strong>vercel.com/new</strong>. It builds automatically and gives you a free <code>piyush-portfolio.vercel.app</code> domain.</p>
                </div>
                <div className="deploy-opt">
                  <span className="opt-name">Option B: Netlify Drop</span>
                  <p className="opt-detail">Run <code>npm run build</code>, then drag and drop the created <code>dist</code> folder into <strong>app.netlify.com/drop</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="guide-footer">
          <button type="button" className="btn-primary" onClick={onClose}>
            Got it, Let's View the Portfolio
          </button>
        </div>
      </div>

      <style>{`
        .guide-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 2500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .guide-modal-window {
          width: 100%;
          max-width: 760px;
          max-height: 88vh;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.98);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 32px 75px -15px rgba(37, 99, 235, 0.2);
        }

        .guide-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: rgba(248, 250, 252, 0.9);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .guide-title {
          font-size: 1.3rem;
          color: #090e17;
          margin-top: 4px;
          font-weight: 700;
        }

        .guide-close-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: var(--radius-pill);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .guide-close-btn:hover {
          color: #090e17;
          background: #ffffff;
        }

        .guide-body {
          padding: 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .guide-step-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 18px;
          background: rgba(248, 250, 252, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: var(--radius-lg);
        }

        .step-num-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(239, 246, 255, 0.95);
          border: 1px solid rgba(191, 219, 254, 0.9);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .step-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .step-title {
          font-size: 1rem;
          color: #090e17;
          font-weight: 700;
        }

        .step-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.55;
        }

        .code-block {
          background: #ffffff;
          border: 1px solid rgba(191, 219, 254, 0.9);
          border-radius: 6px;
          padding: 8px 12px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #1d4ed8;
          font-weight: 500;
        }

        .step-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.825rem;
          color: #334155;
        }

        .step-bullets li strong {
          color: #090e17;
        }

        .deploy-options-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 6px;
        }

        .deploy-opt {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 8px;
          padding: 12px 14px;
        }

        .opt-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-blue);
        }

        .opt-detail {
          font-size: 0.8rem;
          color: #475569;
          margin-top: 3px;
          line-height: 1.45;
        }

        .guide-footer {
          padding: 16px 24px;
          background: rgba(248, 250, 252, 0.9);
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
}

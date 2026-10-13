import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import ProjectMediaPreview from './ProjectMediaPreview';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="badge badge-cyan">{project.category}</span>
            <span className="badge badge-subtle">{project.badge}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="modal-body">
          {/* Main Title & Client */}
          <div className="modal-title-box">
            <h2 className="modal-project-title">{project.title}</h2>
            <div className="modal-subtitle">
              <span className="client">{project.client}</span>
              <span>·</span>
              <span className="role">{project.role}</span>
              {project.employment && (
                <>
                  <span>·</span>
                  <span className="emp">{project.employment}</span>
                </>
              )}
            </div>
          </div>

          {/* Media Showcase */}
          <div className="modal-media-wrap">
            <ProjectMediaPreview project={project} />
          </div>

          {/* Context & Delivery Scope */}
          <div className="modal-section">
            <h3 className="section-subheading">Project Context & Delivery Scope</h3>
            <p className="modal-narrative-text">{project.fullDescription}</p>
          </div>

          {/* Workflow Steps if present */}
          {project.workflowSteps && (
            <div className="modal-section">
              <h3 className="section-subheading">Production Pipeline & Workflow</h3>
              <div className="modal-workflow-pills">
                {project.workflowSteps.map((step, idx) => (
                  <span key={idx} className="modal-wf-pill">
                    {idx + 1}. {step}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables & Key Highlights */}
          <div className="modal-section">
            <h3 className="section-subheading">Key Deliverables & Responsibilities</h3>
            <div className="modal-highlights-grid">
              {project.highlights.map((h, i) => (
                <div key={i} className="highlight-pill-card">
                  <CheckCircle2 size={16} className="text-blue flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Production Stack */}
          <div className="modal-section">
            <h3 className="section-subheading">Tools & Production Stack</h3>
            <span className="modal-tools-text">{project.toolsList}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Close
          </button>
          <a
            href={`mailto:piyush.sharma.ug25@iilm.edu?subject=Discussion%20re:%20${encodeURIComponent(project.title)}`}
            className="btn-primary"
          >
            <span>Inquire About This Project</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFade 0.2s ease-out;
        }

        .modal-window {
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.98);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 32px 75px -15px rgba(37, 99, 235, 0.2);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          background: rgba(248, 250, 252, 0.9);
        }

        .modal-header-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .modal-close-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: var(--radius-pill);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background: #ffffff;
        }

        .modal-body {
          padding: 28px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .modal-title-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .modal-project-title {
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 700;
          color: #090e17;
        }

        .modal-subtitle {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .modal-subtitle .client {
          color: var(--accent-blue);
          font-weight: 600;
        }

        .modal-subtitle .role {
          color: #0f172a;
          font-weight: 500;
        }

        .modal-subtitle .emp {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .modal-media-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .modal-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .section-subheading {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 700;
        }

        .modal-narrative-text {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #334155;
        }

        .modal-workflow-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .modal-wf-pill {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #1e3a8a;
          background: rgba(239, 246, 255, 0.9);
          border: 1px solid rgba(191, 219, 254, 0.9);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
        }

        .modal-highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        .highlight-pill-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(248, 250, 252, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: #1e293b;
          line-height: 1.45;
        }

        .modal-tools-text {
          font-size: 0.875rem;
          color: #0f172a;
          font-weight: 500;
        }

        .text-blue {
          color: var(--accent-blue);
        }

        .flex-shrink-0 {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          background: rgba(248, 250, 252, 0.9);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        @keyframes modalFade {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

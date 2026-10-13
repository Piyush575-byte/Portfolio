import React from 'react';
import { ArrowUpRight, CheckCircle2, Briefcase, ChevronRight } from 'lucide-react';
import { selectedProjects } from '../data/portfolioData';
import ProjectMediaPreview from './ProjectMediaPreview';

export default function SelectedWork({ onSelectProject }) {
  return (
    <section className="section-wrapper" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Production Engagements</span>
          </div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Video editing, government-accredited courseware production, and curriculum co-management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {selectedProjects.map((project, index) => (
            <article key={project.id} className="project-card glass-card">
              <div className="project-inner-layout">
                {/* Media Preview Column (~55-60% area) */}
                <div className="project-preview-col">
                  <ProjectMediaPreview 
                    project={project} 
                    onInspect={() => onSelectProject(project)} 
                  />
                </div>

                {/* Information Column */}
                <div className="project-info-col">
                  {/* Category & Badge */}
                  <div className="project-meta-strip">
                    <span className="badge badge-cyan">{project.category}</span>
                    <span className="badge badge-subtle">{project.badge}</span>
                  </div>

                  {/* Title & Client */}
                  <div className="project-title-group">
                    <h3 className="project-title">
                      <span className="project-index">0{index + 1}. </span>
                      {project.title}
                    </h3>
                    <div className="project-client-role">
                      <span className="client-name">{project.client}</span>
                      <span className="bullet-sep">·</span>
                      <span className="role-name">{project.role}</span>
                    </div>
                    {project.employment && (
                      <div className="employment-tag">
                        <Briefcase size={13} className="tag-icon" />
                        <span>{project.employment}</span>
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="project-summary">{project.summary}</p>

                  {/* Optional Explicit Workflow Pipeline (e.g. for Project 01) */}
                  {project.workflowSteps && (
                    <div className="project-workflow-strip">
                      <span className="workflow-strip-label">Production Workflow:</span>
                      <div className="workflow-steps-flow">
                        {project.workflowSteps.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="wf-step-tag">{step}</span>
                            {sIdx < project.workflowSteps.length - 1 && (
                              <ChevronRight size={13} className="wf-step-arrow" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Highlights */}
                  <ul className="project-highlights-list">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <CheckCircle2 size={16} className="highlight-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools Strip (Clean single typographic line) */}
                  <div className="project-tools-wrap">
                    <span className="tools-label">Tools & Stack</span>
                    <span className="tools-text-line">{project.toolsList}</span>
                  </div>

                  {/* Action Button: View Case Study */}
                  <div className="project-actions">
                    <button
                      type="button"
                      className="btn-case-study"
                      onClick={() => onSelectProject(project)}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .project-card {
          padding: 32px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card:hover {
          transform: translateY(-2px);
          border-color: rgba(147, 197, 253, 0.9);
          box-shadow: var(--shadow-card-hover);
        }

        .project-inner-layout {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 36px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .project-inner-layout {
            grid-template-columns: 100%;
            gap: 24px;
          }
          .project-card {
            padding: 22px;
          }
        }

        .project-preview-col {
          min-width: 0;
          width: 100%;
        }

        .project-info-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-width: 0;
        }

        .project-meta-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .project-title-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .project-title {
          font-size: clamp(1.4rem, 2vw, 1.75rem);
          font-weight: 700;
          color: #090e17;
          letter-spacing: -0.025em;
        }

        .project-index {
          color: var(--accent-blue);
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 1.15rem;
        }

        .project-client-role {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .client-name {
          color: var(--accent-blue);
          font-weight: 600;
        }

        .bullet-sep {
          color: #cbd5e1;
        }

        .role-name {
          color: #334155;
          font-weight: 600;
        }

        .employment-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #64748b;
          margin-top: 2px;
        }

        .tag-icon {
          color: var(--accent-blue);
        }

        .project-summary {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #334155;
        }

        .project-workflow-strip {
          background: rgba(239, 246, 255, 0.75);
          border: 1px solid rgba(191, 219, 254, 0.8);
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .workflow-strip-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          text-transform: uppercase;
          color: #1d4ed8;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .workflow-steps-flow {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .wf-step-tag {
          font-size: 0.75rem;
          color: #0f172a;
          font-weight: 600;
          background: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(226, 232, 240, 0.9);
        }

        .wf-step-arrow {
          color: #94a3b8;
        }

        .project-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 2px 0;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.45;
        }

        .highlight-check {
          color: var(--accent-blue);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .project-tools-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 10px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
        }

        .tools-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .tools-text-line {
          font-size: 0.85rem;
          color: #0f172a;
          font-weight: 500;
        }

        .project-actions {
          margin-top: 4px;
        }

        .btn-case-study {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 246, 255, 0.9);
          color: var(--accent-blue);
          font-size: 0.875rem;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(191, 219, 254, 0.8);
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.05);
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .btn-case-study:hover {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.25);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}

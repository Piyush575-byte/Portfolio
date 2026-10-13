import React from 'react';
import { Film, Sparkles, Terminal, Compass } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsTools() {
  return (
    <section className="section-wrapper" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Capabilities & Stack</span>
          </div>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            An organized matrix of production software, creative disciplines, technical capabilities, and active learning areas.
          </p>
        </div>

        {/* 4 Categorized Columns */}
        <div className="skills-grid">
          {/* 1. Design & Video */}
          <div className="skill-category-card glass-card">
            <div className="category-header">
              <div className="category-icon-box">
                <Film size={20} className="cat-icon" />
              </div>
              <div>
                <h3 className="category-title">Design & Video</h3>
                <span className="category-meta">Creative Production Suite</span>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.designAndVideo.map((item, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-blue-dot"></div>
                  <div className="skill-details">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-note">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Creative Skills */}
          <div className="skill-category-card glass-card">
            <div className="category-header">
              <div className="category-icon-box">
                <Sparkles size={20} className="cat-icon" />
              </div>
              <div>
                <h3 className="category-title">Creative Skills</h3>
                <span className="category-meta">Motion & Narrative</span>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.creativeSkills.map((item, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-blue-dot"></div>
                  <div className="skill-details">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-note">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Technology */}
          <div className="skill-category-card glass-card">
            <div className="category-header">
              <div className="category-icon-box">
                <Terminal size={20} className="cat-icon" />
              </div>
              <div>
                <h3 className="category-title">Technology</h3>
                <span className="category-meta">Computer Science & Cloud</span>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.technology.map((item, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-blue-dot"></div>
                  <div className="skill-details">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-note">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Currently Learning */}
          <div className="skill-category-card glass-card">
            <div className="category-header">
              <div className="category-icon-box">
                <Compass size={20} className="cat-icon" />
              </div>
              <div>
                <h3 className="category-title">Currently Learning</h3>
                <span className="category-meta">Active Skill Expansion</span>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.currentlyLearning.map((item, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-blue-dot"></div>
                  <div className="skill-details">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-note">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="learning-banner">
              <span>Expanding 3D spatial motion & web vector animation workflows.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .skill-category-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .skill-category-card:hover {
          transform: translateY(-2px);
          border-color: rgba(147, 197, 253, 0.9);
          box-shadow: var(--shadow-card-hover);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .category-icon-box {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: rgba(239, 246, 255, 0.95);
          border: 1px solid rgba(191, 219, 254, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.05);
        }

        .cat-icon {
          color: var(--accent-blue);
        }

        .category-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #090e17;
        }

        .category-meta {
          font-size: 0.725rem;
          color: #64748b;
          font-family: var(--font-mono);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }

        .skill-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .skill-blue-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          margin-top: 7px;
          flex-shrink: 0;
        }

        .skill-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skill-name {
          font-size: 0.925rem;
          font-weight: 600;
          color: #0f172a;
        }

        .skill-note {
          font-size: 0.75rem;
          color: #64748b;
          line-height: 1.4;
        }

        .learning-banner {
          margin-top: 8px;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          background: rgba(239, 246, 255, 0.85);
          border: 1px solid rgba(191, 219, 254, 0.9);
          font-size: 0.75rem;
          color: #1d4ed8;
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
}

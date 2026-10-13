import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { personalInfo, aboutNarrative } from '../data/portfolioData';

export default function AboutCertifications() {
  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Background & Credentials</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging technical computer science education with video editing and motion graphics.
          </p>
        </div>

        <div className="about-main-grid">
          {/* Left Column: Concrete Narrative */}
          <div className="about-story-col">
            <div className="story-card glass-card">
              <h3 className="story-heading">Computer Science Rigor Meets Creative Production</h3>
              <p className="story-body">
                {aboutNarrative.intro}
              </p>
              <p className="story-body">
                {aboutNarrative.technicalPerspective}
              </p>
            </div>
          </div>

          {/* Right Column: Academic Profile & Certifications */}
          <div className="about-credentials-col">
            {/* Academic Profile */}
            <div className="credential-card glass-card">
              <div className="cred-header">
                <div className="cred-icon-box">
                  <GraduationCap size={20} className="cred-icon" />
                </div>
                <div>
                  <h4 className="cred-title">Academic Profile</h4>
                  <span className="cred-subtitle">B.Tech Computer Science & Engineering</span>
                </div>
              </div>

              <div className="academic-meta-list">
                <div className="meta-row">
                  <span className="meta-k">Institution</span>
                  <span className="meta-v">{personalInfo.education.institution}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-k">Current CGPA</span>
                  <span className="meta-v highlight-cgpa">{personalInfo.education.cgpa}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-k">Expected Graduation</span>
                  <span className="meta-v">{personalInfo.education.graduation}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-k">Location</span>
                  <span className="meta-v">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="credential-card glass-card">
              <div className="cred-header">
                <div className="cred-icon-box">
                  <Award size={20} className="cred-icon" />
                </div>
                <div>
                  <h4 className="cred-title">Certifications</h4>
                  <span className="cred-subtitle">Artificial Intelligence & Ethics</span>
                </div>
              </div>

              <div className="certs-list">
                {aboutNarrative.certifications.map((cert, index) => (
                  <div key={index} className="cert-item">
                    <div className="cert-top">
                      <span className="cert-name">{cert.title}</span>
                      <span className="badge badge-cyan">{cert.issuer}</span>
                    </div>
                    <p className="cert-focus">{cert.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-main-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        @media (max-width: 960px) {
          .about-main-grid {
            grid-template-columns: 100%;
            gap: 24px;
          }
        }

        .about-story-col {
          display: flex;
          flex-direction: column;
        }

        .story-card {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
        }

        .story-heading {
          font-size: 1.4rem;
          color: #090e17;
          line-height: 1.3;
        }

        .story-body {
          font-size: 1rem;
          line-height: 1.7;
          color: #334155;
        }

        .about-credentials-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .credential-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
        }

        .cred-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .cred-icon-box {
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

        .cred-icon {
          color: var(--accent-blue);
        }

        .cred-title {
          font-size: 1.05rem;
          color: #090e17;
          font-weight: 700;
        }

        .cred-subtitle {
          font-size: 0.75rem;
          color: #64748b;
          font-family: var(--font-mono);
        }

        .academic-meta-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
        }

        .meta-k {
          color: #64748b;
        }

        .meta-v {
          color: #0f172a;
          font-weight: 600;
        }

        .highlight-cgpa {
          color: var(--accent-blue);
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .certs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cert-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 12px 14px;
          background: rgba(248, 250, 252, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: var(--radius-sm);
        }

        .cert-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .cert-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #090e17;
        }

        .cert-focus {
          font-size: 0.78rem;
          color: #475569;
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
}

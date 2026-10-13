import React from 'react';
import { Film, Layout, Laptop, Play, UploadCloud } from 'lucide-react';

export default function ProjectMediaPlaceholder({ project, onInspect }) {
  const { title, client, placeholderType, placeholderLabel, placeholderDimensions, aspectRatio } = project;

  return (
    <div className={`project-media-frame aspect-${aspectRatio?.replace(':', '-') || '16-9'}`}>
      <div className="placeholder-canvas">
        {/* Subtle Light Grid Pattern */}
        <div className="canvas-light-grid"></div>

        {/* Distinct Light-Mode Skeleton Graphic */}
        {placeholderType === 'video' && (
          <div className="skeleton-video-art">
            <div className="video-play-emblem">
              <div className="play-pulse-ring"></div>
              <div className="play-icon-box">
                <Play size={24} className="play-icon" />
              </div>
            </div>

            {/* Video Player Timeline */}
            <div className="mock-video-timeline">
              <div className="mock-scrubber">
                <span className="mock-scrub-fill" style={{ width: '48%' }}></span>
              </div>
              <div className="mock-time-readout">
                <span>02:14 / 15:40</span>
                <span>RCI ACCREDITED COURSE · PREMIERE PRO</span>
              </div>
            </div>
          </div>
        )}

        {placeholderType === 'editorial' && (
          <div className="skeleton-editorial-art">
            <div className="editorial-sheet">
              <div className="sheet-header">
                <span className="sheet-pill">ICRA REHABILITATION MODULE</span>
                <span className="sheet-id">MOD-04</span>
              </div>
              <div className="sheet-skeleton-lines">
                <div className="line line-lg"></div>
                <div className="line line-md"></div>
                <div className="line line-sm"></div>
              </div>
              <div className="sheet-grid-mock">
                <div className="mock-col"></div>
                <div className="mock-col"></div>
              </div>
            </div>
          </div>
        )}

        {placeholderType === 'app' && (
          <div className="skeleton-app-art">
            <div className="app-browser-frame">
              <div className="app-browser-header">
                <div className="window-dots-sm">
                  <span></span><span></span><span></span>
                </div>
                <div className="mock-url-bar">hackindia.iilm.edu/app</div>
                <span className="app-status-badge">1st Runner-Up (AI/Web)</span>
              </div>
              <div className="app-dashboard-body">
                <div className="app-sidebar-mock">
                  <div className="mock-bar"></div>
                  <div className="mock-bar"></div>
                  <div className="mock-bar"></div>
                </div>
                <div className="app-main-mock">
                  <div className="mock-metric-cards">
                    <div className="mock-card"></div>
                    <div className="mock-card"></div>
                  </div>
                  <div className="mock-chart-area"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Placeholder Notice Badge */}
        <div className="placeholder-watermark-overlay">
          <div className="watermark-pill">
            <UploadCloud size={13} className="watermark-icon" />
            <span className="watermark-text">PLACEHOLDER · READY FOR REAL ASSET</span>
          </div>
          <p className="watermark-hint">
            Replace with {placeholderDimensions} in <code>src/data/portfolioData.js</code>
          </p>
        </div>
      </div>

      <style>{`
        .project-media-frame {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #f1f5f9;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-media-frame:hover {
          border-color: rgba(96, 165, 250, 0.8);
          box-shadow: 0 16px 36px -10px rgba(37, 99, 235, 0.12);
        }

        .aspect-16-9 {
          aspect-ratio: 16 / 9;
        }

        .aspect-16-10 {
          aspect-ratio: 16 / 10;
        }

        .placeholder-canvas {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .canvas-light-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        /* Video Skeleton */
        .skeleton-video-art {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .video-play-emblem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .play-pulse-ring {
          position: absolute;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 1px solid rgba(59, 130, 246, 0.35);
          background: rgba(239, 246, 255, 0.7);
        }

        .play-icon-box {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--liquid-btn-bg);
          border: var(--liquid-btn-border);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
        }

        .play-icon {
          color: #ffffff;
          margin-left: 3px;
        }

        .mock-video-timeline {
          position: absolute;
          bottom: 36px;
          left: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .mock-scrubber {
          width: 100%;
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }

        .mock-scrub-fill {
          display: block;
          height: 100%;
          background: #2563eb;
        }

        .mock-time-readout {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #64748b;
        }

        /* Editorial Skeleton */
        .skeleton-editorial-art {
          width: 85%;
          height: 75%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .editorial-sheet {
          width: 100%;
          height: 100%;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }

        .sheet-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sheet-pill {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #1d4ed8;
          background: rgba(239, 246, 255, 0.9);
          border: 1px solid rgba(191, 219, 254, 0.8);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        .sheet-id {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #94a3b8;
        }

        .sheet-skeleton-lines {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .line {
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
        }

        .line-lg { width: 85%; }
        .line-md { width: 65%; }
        .line-sm { width: 40%; }

        .sheet-grid-mock {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          flex: 1;
        }

        .mock-col {
          background: #f8fafc;
          border-radius: 6px;
          border: 1px dashed #cbd5e1;
        }

        /* App Skeleton */
        .skeleton-app-art {
          width: 90%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-browser-frame {
          width: 100%;
          height: 100%;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }

        .app-browser-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 12px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          font-family: var(--font-mono);
          font-size: 0.65rem;
        }

        .window-dots-sm {
          display: flex;
          gap: 4px;
        }

        .window-dots-sm span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .mock-url-bar {
          color: #64748b;
        }

        .app-status-badge {
          color: #2563eb;
          font-weight: 600;
        }

        .app-dashboard-body {
          flex: 1;
          display: flex;
          padding: 10px;
          gap: 10px;
          background: #ffffff;
        }

        .app-sidebar-mock {
          width: 25%;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mock-bar {
          height: 8px;
          background: #f1f5f9;
          border-radius: 4px;
        }

        .app-main-mock {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mock-metric-cards {
          display: flex;
          gap: 8px;
        }

        .mock-card {
          flex: 1;
          height: 28px;
          background: rgba(239, 246, 255, 0.8);
          border: 1px solid rgba(191, 219, 254, 0.8);
          border-radius: 6px;
        }

        .mock-chart-area {
          flex: 1;
          background: #f8fafc;
          border: 1px dashed #e2e8f0;
          border-radius: 6px;
        }

        /* Watermark */
        .placeholder-watermark-overlay {
          position: absolute;
          bottom: 10px;
          left: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 6px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 8px;
          padding: 6px 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .watermark-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .watermark-icon {
          color: var(--accent-blue);
        }

        .watermark-text {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.04em;
        }

        .watermark-hint {
          font-size: 0.65rem;
          color: #64748b;
        }

        .watermark-hint code {
          color: var(--accent-blue);
          background: rgba(239, 246, 255, 0.9);
          padding: 1px 4px;
          border-radius: 3px;
        }

        @media (max-width: 600px) {
          .placeholder-watermark-overlay {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera, Film, Award, CheckCircle2 } from 'lucide-react';
import { recognitionData } from '../data/portfolioData';
import { assetMap } from '../data/assetMap';
import { useHoverVideo } from '../hooks/useHoverVideo';

export default function Recognition() {
  const { delhiEvent, virendraKumar } = recognitionData;

  // Active view: 'slider' (Event Photos) | 'reel' (Event Launch Reel)
  const [activeView, setActiveView] = useState('slider');

  // Photo Slider state (0 or 1)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mobile Touch Swipe state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const images = assetMap.delhiEvent.sliderImages;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left
      nextSlide();
    } else if (distance < -50) {
      // Swiped right
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="section-wrapper" id="recognition">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Public Recognition</span>
          </div>
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="section-subtitle">
            Documented public recognitions and event milestones across inclusive education initiatives.
          </p>
        </div>

        <div className="recognition-editorial-layout">
          {/* Main Event Card */}
          <article className="recognition-feature-card glass-card">
            <div className="rec-inner-grid">
              {/* Media Column: Photo Slider or Event Reel */}
              <div className="rec-media-col">
                <div className="rec-media-frame">
                  {/* View Switcher Bar */}
                  <div className="rec-view-tabs" role="tablist" aria-label="Recognition media view">
                    <button
                      type="button"
                      className={`rec-tab-btn ${activeView === 'slider' ? 'active' : ''}`}
                      onClick={() => setActiveView('slider')}
                      role="tab"
                      aria-selected={activeView === 'slider'}
                    >
                      <Camera size={13} />
                      <span>Event Photographs ({images.length})</span>
                    </button>
                    <button
                      type="button"
                      className={`rec-tab-btn ${activeView === 'reel' ? 'active' : ''}`}
                      onClick={() => setActiveView('reel')}
                      role="tab"
                      aria-selected={activeView === 'reel'}
                    >
                      <Film size={13} />
                      <span>Event Launch Reel</span>
                    </button>
                  </div>

                  {/* 1. Photo Slider View */}
                  {activeView === 'slider' && (
                    <div
                      className="slider-stage"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div className="slide-image-viewport">
                        <img
                          src={images[currentSlide].src}
                          alt={images[currentSlide].alt}
                          className="slide-authentic-img"
                          onError={(e) => {
                            if (images[currentSlide].originalSrc && e.target.src !== images[currentSlide].originalSrc) {
                              e.target.src = images[currentSlide].originalSrc;
                            }
                          }}
                        />
                      </div>

                      {/* Slider Navigation Arrows */}
                      <button
                        type="button"
                        className="slider-arrow arrow-prev"
                        onClick={prevSlide}
                        aria-label="Previous photograph"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        className="slider-arrow arrow-next"
                        onClick={nextSlide}
                        aria-label="Next photograph"
                      >
                        <ChevronRight size={18} />
                      </button>

                      {/* Bottom Caption & Pagination Bar */}
                      <div className="slider-bottom-bar">
                        <p className="slide-caption-text">
                          {images[currentSlide].caption}
                        </p>
                        <div className="slide-dots-group">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className={`slide-dot ${currentSlide === idx ? 'active' : ''}`}
                              onClick={() => setCurrentSlide(idx)}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. Playable Event Reel View with Hover-to-Play */}
                  {activeView === 'reel' && (
                    <EventReelPlayer src={assetMap.delhiEvent.eventReelSrc} />
                  )}
                </div>
              </div>

              {/* Information Column */}
              <div className="rec-info-col">
                <div className="rec-meta-badge">
                  <span className="rec-org-tag">{delhiEvent.organization}</span>
                  <span className="bullet-sep">·</span>
                  <span className="rec-event-tag">{delhiEvent.event}</span>
                </div>

                <h3 className="rec-heading">{delhiEvent.title}</h3>

                <p className="rec-caption-editorial">
                  {delhiEvent.caption}
                </p>

                <div className="rec-fact-box">
                  <div className="fact-item">
                    <span className="fact-label">Event Milestone</span>
                    <span className="fact-val">OPI Course Inauguration & Divyangjan Initiative</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Department</span>
                    <span className="fact-val">Department of Social Welfare, Government of Delhi</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Presented Memento</span>
                    <span className="fact-val status-verified">"एक शाम दिव्यांगों के नाम" (सम्मान · समावेश · सशक्तिकरण)</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Reserved Dr. Virendra Kumar Award Section */}
          {/* Strictly remains hidden until real photograph is supplied */}
          {virendraKumar.isPublished && (
            <article className="recognition-feature-card glass-card">
              <div className="rec-inner-grid">
                <div className="rec-info-col">
                  <span className="rec-org-tag">{virendraKumar.officialTitle}</span>
                  <h3 className="rec-heading">{virendraKumar.title}</h3>
                  <p className="rec-caption-editorial">{virendraKumar.caption}</p>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      <style>{`
        .recognition-editorial-layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .recognition-feature-card {
          padding: 32px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-card);
        }

        .rec-inner-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 36px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .rec-inner-grid {
            grid-template-columns: 100%;
            gap: 24px;
          }
          .recognition-feature-card {
            padding: 22px;
          }
        }

        .rec-media-col {
          width: 100%;
          min-width: 0;
        }

        .rec-media-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #090e17;
          border: 1px solid rgba(226, 232, 240, 0.95);
          display: flex;
          flex-direction: column;
        }

        .rec-view-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: #ffffff;
          border-bottom: 1px solid rgba(226, 232, 240, 0.9);
        }

        .rec-tab-btn {
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

        .rec-tab-btn.active {
          color: #2563eb;
          background: rgba(239, 246, 255, 0.95);
          border-color: rgba(191, 219, 254, 0.95);
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08);
        }

        /* 1. Slider Stage */
        .slider-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          background: #090e17;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .slide-image-viewport {
          position: relative;
          width: 100%;
          height: calc(100% - 64px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          background: #090e17;
        }

        .slide-authentic-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
          display: block;
        }

        .slider-arrow {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        .slider-arrow:hover {
          background: #ffffff;
          transform: translateY(-50%) scale(1.08);
        }

        .arrow-prev { left: 14px; }
        .arrow-next { right: 14px; }

        .slider-bottom-bar {
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(12px);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .slide-caption-text {
          font-size: 0.75rem;
          color: #cbd5e1;
          line-height: 1.4;
          flex: 1;
        }

        .slide-dots-group {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .slide-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #64748b;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .slide-dot.active {
          background: #3b82f6;
          transform: scale(1.25);
        }

        /* 2. Reel Stage */
        .reel-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          background: #090e17;
          display: flex;
          flex-direction: column;
        }

        .event-reel-video {
          width: 100%;
          height: calc(100% - 34px);
          object-fit: contain;
          background: #000000;
        }

        .event-reel-caption-strip {
          padding: 8px 14px;
          background: #0f172a;
          color: #94a3b8;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Info Column */
        .rec-info-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-width: 0;
        }

        .rec-meta-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .rec-org-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .rec-event-tag {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 500;
        }

        .rec-heading {
          font-size: clamp(1.4rem, 2vw, 1.75rem);
          font-weight: 700;
          color: #090e17;
          letter-spacing: -0.025em;
          line-height: 1.25;
        }

        .rec-caption-editorial {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.65;
        }

        .rec-fact-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid rgba(226, 232, 240, 0.85);
        }

        .fact-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8125rem;
          gap: 12px;
        }

        .fact-label {
          color: #64748b;
          font-weight: 500;
          flex-shrink: 0;
        }

        .fact-val {
          color: #0f172a;
          font-weight: 600;
          text-align: right;
        }

        .status-verified {
          color: #2563eb;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .interactive-reel-stage {
          cursor: pointer;
          outline: none;
        }

        .interactive-reel-stage:focus-visible {
          box-shadow: inset 0 0 0 2px #3b82f6;
        }

        .event-reel-caption-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: #0f172a;
          color: #94a3b8;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reel-hover-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          padding: 3px 8px;
          border-radius: 999px;
          font-size: 0.6rem;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 0.04em;
        }

        .reel-chip-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #60a5fa;
        }

        .reel-chip-dot.active {
          background: #10b981;
          box-shadow: 0 0 6px #34d399;
        }
      `}</style>
    </section>
  );
}

function EventReelPlayer({ src }) {
  const {
    videoRef,
    isPlaying,
    isMuted,
    handleMouseEnter,
    handleMouseLeave,
    togglePlay,
    handleKeyDown,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleError
  } = useHoverVideo({
    id: 'delhi-event-launch-reel',
    src
  });

  return (
    <div 
      className="reel-stage interactive-reel-stage"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlay}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Preview video: Delhi stands with its Divyangjan Course Launch Reel (Hover or tap to play)"
    >
      <video
        ref={videoRef}
        src={src}
        className="event-reel-video"
        playsInline
        preload="metadata"
        muted={isMuted}
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
      />
      <div className="event-reel-caption-strip">
        <span>Delhi stands with its Divyangjan · Course Launch Reel</span>
        <div className="reel-hover-chip">
          <span className={`reel-chip-dot ${isPlaying ? 'active' : ''}`} />
          <span>{isPlaying ? 'PLAYING PREVIEW' : 'HOVER TO PREVIEW'}</span>
        </div>
      </div>
    </div>
  );
}

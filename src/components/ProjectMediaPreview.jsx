import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Globe, AlertCircle, RefreshCw } from 'lucide-react';
import { assetMap } from '../data/assetMap';
import { useHoverVideo } from '../hooks/useHoverVideo';

function InstagramIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Format MM:SS helper
const formatTime = (secs) => {
  if (isNaN(secs) || !isFinite(secs)) return '00:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
};

export default function ProjectMediaPreview({ project, _onInspect }) {
  const { id } = project;

  // Language state for Project 03
  const [icraLanguage, setIcraLanguage] = useState('hindi');

  // -------------------------------------------------------------
  // PROJECT 01 — Language Barrier Reel (9:16 Portrait)
  // -------------------------------------------------------------
  if (id === 'lakshya-promotional-reel') {
    return <LakshyaReelPreview project={project} />;
  }

  // -------------------------------------------------------------
  // PROJECT 02 — OPI Lecture Series (16:9 Landscape)
  // -------------------------------------------------------------
  if (id === 'opi-lecture-series') {
    return <OpiLecturePreview />;
  }

  // -------------------------------------------------------------
  // PROJECT 03 — ICRA Module Content (Bilingual 16:9)
  // -------------------------------------------------------------
  if (id === 'icra-module-content') {
    return (
      <IcraModulePreview 
        icraLanguage={icraLanguage} 
        setIcraLanguage={setIcraLanguage} 
      />
    );
  }

  // -------------------------------------------------------------
  // PROJECT 04 — OPI Course Co-Management (Portal Screenshot Image)
  // -------------------------------------------------------------
  if (id === 'opi-course-co-management') {
    return (
      <div className="media-canvas-wrapper aspect-16-9 opi-management-canvas">
        <img
          src={assetMap.opiCoManagement.portalImage}
          alt="Orientation Programme in Inclusion (OPI) Course Co-Management Portal"
          className="portal-screenshot-img"
          onError={(e) => {
            console.warn('[ProjectMediaPreview] OPI portal image fallback triggered');
            if (e.target.src !== assetMap.opiCoManagement.originalPortalImage) {
              e.target.src = assetMap.opiCoManagement.originalPortalImage;
            }
          }}
        />

        <div className="portal-overlay-strip">
          <div className="portal-badge-left">
            <span className="dot-live"></span>
            <span>OPI LEVEL ONE PORTAL · CHAPTER & SLM MANAGEMENT</span>
          </div>
          <span className="portal-badge-right">VISION DIVYANG FOUNDATION</span>
        </div>

        <style>{`
          .opi-management-canvas {
            position: relative;
            background: #090e17;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .portal-screenshot-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease;
          }

          .opi-management-canvas:hover .portal-screenshot-img {
            transform: scale(1.02);
          }

          .portal-overlay-strip {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px 16px;
            background: linear-gradient(180deg, transparent 0%, rgba(9, 14, 23, 0.85) 100%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #ffffff;
            font-family: var(--font-mono);
            font-size: 0.68rem;
          }

          .portal-badge-left {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #93c5fd;
          }

          .portal-badge-right {
            color: #cbd5e1;
            font-weight: 600;
          }
        `}</style>
      </div>
    );
  }

  return null;
}

// ------------------------------------------------------------------
// SUBCOMPONENT: Lakshya Reel Preview (Hover-to-Play, 9:16)
// ------------------------------------------------------------------
function LakshyaReelPreview({ project }) {
  const {
    videoRef,
    isPlaying,
    isMuted,
    currentTime,
    duration,
    isLoading,
    videoError,
    handleMouseEnter,
    handleMouseLeave,
    togglePlay,
    handleKeyDown,
    toggleMute,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleCanPlay,
    handleWaiting,
    handleError,
    handleScrub
  } = useHoverVideo({
    id: 'lakshya-promotional-reel',
    src: assetMap.lakshyaReel.videoSrc
  });

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="media-canvas-wrapper reel-wrapper-9-16">
      <div className="reel-portrait-container">
        {/* Main 9:16 Video Viewport with Hover-to-Play & Click Toggle */}
        <div 
          className="reel-video-viewport"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={togglePlay}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Preview video: Language Barrier Promotional Reel (Hover or tap to play)"
        >
          <video
            ref={videoRef}
            src={assetMap.lakshyaReel.videoSrc}
            className="reel-video-element"
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onCanPlay={handleCanPlay}
            onWaiting={handleWaiting}
            onError={handleError}
          />

          {/* Liquid Glass Overlay */}
          <div className={`reel-overlay ${isPlaying ? 'overlay-playing' : ''}`}>
            {/* Top Bar: Live Pill & Sound Button */}
            <div className="reel-top-bar">
              <div className="reel-source-pill">
                <span className={`dot-live ${isPlaying ? 'pulse' : ''}`} />
                <span>{isPlaying ? 'PLAYING PREVIEW' : 'HOVER TO PREVIEW'} · 9:16</span>
              </div>
              <button
                type="button"
                className="reel-mute-btn"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
            </div>

            {/* Loading Badge */}
            {isLoading && !videoError && (
              <div className="video-loading-badge">
                <span className="spinner-mini" />
                <span>Loading Reel...</span>
              </div>
            )}

            {/* Error Message */}
            {videoError && (
              <div className="video-error-badge">
                <AlertCircle size={16} />
                <span>{videoError}</span>
              </div>
            )}

            {/* Center Play Indicator */}
            {!videoError && !isPlaying && (
              <div className="reel-center-play">
                <div className="liquid-glass-play-btn" aria-hidden="true">
                  <Play size={22} className="indent-play" />
                </div>
              </div>
            )}

            {/* Bottom Scrubber & Metadata */}
            {!videoError && (
              <div className="reel-bottom-controls" onClick={(e) => e.stopPropagation()}>
                <div 
                  className="scrubber-bar" 
                  onClick={handleScrub} 
                  role="progressbar" 
                  aria-valuenow={progressPercent} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                >
                  <div className="scrubber-progress" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="reel-time-strip">
                  <span>{formatTime(currentTime)}</span>
                  <span className="time-dur">{duration ? formatTime(duration) : '00:28'}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Companion Workflow Pane */}
        <div className="reel-companion-pane">
          <div className="reel-workflow-badge">
            <span className="badge-tag">AI-Assisted Video Production</span>
            <span className="badge-org">Lakshya Jeevan Jagriti</span>
            <span className="badge-theme">Theme: Overcoming the Language Barrier</span>
          </div>

          <div className="reel-frames-grid">
            <div className="frame-box">
              <span className="frame-time">00:04</span>
              <span className="frame-label">Script Extract</span>
              <span className="frame-tool">ElevenLabs</span>
            </div>
            <div className="frame-box">
              <span className="frame-time">00:18</span>
              <span className="frame-label">AI Visuals</span>
              <span className="frame-tool">Google Gemini</span>
            </div>
            <div className="frame-box">
              <span className="frame-time">00:36</span>
              <span className="frame-label">Timeline Cut</span>
              <span className="frame-tool">CapCut</span>
            </div>
          </div>

          {project.instagramLink && (
            <div className="instagram-link-slot">
              <a
                href={project.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-instagram-reel"
              >
                <InstagramIcon size={15} />
                <span>Original Instagram Reel</span>
                <ArrowUpRight size={14} className="ml-auto" />
              </a>
            </div>
          )}
        </div>
      </div>

      <style>{reelStyles}</style>
    </div>
  );
}

// ------------------------------------------------------------------
// SUBCOMPONENT: OPI Lecture Preview (Hover-to-Play, 16:9)
// ------------------------------------------------------------------
function OpiLecturePreview() {
  const {
    videoRef,
    isPlaying,
    isMuted,
    currentTime,
    duration,
    isLoading,
    videoError,
    handleMouseEnter,
    handleMouseLeave,
    togglePlay,
    handleKeyDown,
    toggleMute,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleCanPlay,
    handleWaiting,
    handleError,
    handleScrub
  } = useHoverVideo({
    id: 'opi-lecture-series',
    src: assetMap.opiLecture.videoSrc
  });

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className="media-canvas-wrapper aspect-16-9 interactive-preview-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlay}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Preview video: OPI Lecture Series (Hover or tap to play)"
    >
      <video
        ref={videoRef}
        src={assetMap.opiLecture.videoSrc}
        className="card-video-bg"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onWaiting={handleWaiting}
        onError={handleError}
      />

      {/* Video Overlay with Hover Status & Controls */}
      <div className={`video-info-overlay ${isPlaying ? 'playing' : ''}`}>
        <div className="video-card-header">
          <span className="opi-org-tag">VISION DIVYANG FOUNDATION · RCI-APPROVED</span>
          <div className="hover-status-chip">
            <span className={`chip-dot ${isPlaying ? 'active' : ''}`} />
            <span>{isPlaying ? 'PLAYING PREVIEW' : 'HOVER TO PREVIEW'}</span>
          </div>
        </div>

        {/* Loading Indicator */}
        {isLoading && !videoError && (
          <div className="video-loading-badge">
            <span className="spinner-mini" />
            <span>Loading Lecture Video...</span>
          </div>
        )}

        {/* Error Fallback */}
        {videoError && (
          <div className="video-error-state" onClick={(e) => e.stopPropagation()}>
            <AlertCircle size={22} className="error-icon" />
            <span className="error-title">Lecture Video Error</span>
            <span className="error-desc">{videoError}</span>
            <button
              type="button"
              className="retry-btn"
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.load();
                }
              }}
            >
              <RefreshCw size={13} />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* Center Play Button on paused */}
        {!videoError && !isPlaying && (
          <div className="play-control-center" aria-hidden="true">
            <div className="liquid-glass-play-btn">
              <Play size={20} className="indent-play" />
            </div>
          </div>
        )}

        {/* Bottom Strip with Lower Third, Scrubber & Controls */}
        {!videoError && (
          <div className="video-bottom-strip">
            <div className="opi-lower-third-mini">
              <span className="lt-name">Video Editor & Content Manager</span>
              <span className="lt-meta">Piyush Sharma · Vision Divyang Foundation</span>
            </div>

            <div className="player-scrub-cluster" onClick={(e) => e.stopPropagation()}>
              <div 
                className="scrubber-bar horizontal-scrub" 
                onClick={handleScrub} 
                role="progressbar" 
                aria-valuenow={progressPercent} 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                <div className="scrubber-progress" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            <div className="video-controls-cluster">
              <div className="time-pill">
                <span>{formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : (isLoading ? '--:--' : '00:00')}</span>
              </div>
              <button
                type="button"
                className="mute-btn-mini"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{commonVideoStyles}</style>
    </div>
  );
}

// ------------------------------------------------------------------
// SUBCOMPONENT: ICRA Module Preview (Hover-to-Play, Bilingual)
// ------------------------------------------------------------------
function IcraModulePreview({ icraLanguage, setIcraLanguage }) {
  const activeIcraSrc = icraLanguage === 'hindi' 
    ? assetMap.icraModule.hindiVideoSrc 
    : assetMap.icraModule.englishVideoSrc;

  const {
    videoRef,
    isPlaying,
    isMuted,
    currentTime,
    duration,
    isLoading,
    videoError,
    handleMouseEnter,
    handleMouseLeave,
    togglePlay,
    handleKeyDown,
    toggleMute,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleCanPlay,
    handleWaiting,
    handleError,
    handleScrub
  } = useHoverVideo({
    id: `icra-module-${icraLanguage}`,
    src: activeIcraSrc
  });

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="icra-container-block">
      {/* Accessible Language Toggle Strip */}
      <div className="icra-lang-bar" role="group" aria-label="Select Video Language Edition">
        <div className="lang-label-group">
          <Globe size={14} className="lang-icon" />
          <span className="lang-caption">Edition:</span>
        </div>

        <div className="lang-toggle-pills">
          <button
            type="button"
            className={`btn-lang-toggle ${icraLanguage === 'hindi' ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIcraLanguage('hindi');
            }}
            aria-pressed={icraLanguage === 'hindi'}
          >
            <span>Hindi Version</span>
          </button>
          <button
            type="button"
            className={`btn-lang-toggle ${icraLanguage === 'english' ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIcraLanguage('english');
            }}
            aria-pressed={icraLanguage === 'english'}
          >
            <span>English Version</span>
          </button>
        </div>
      </div>

      {/* 16:9 Video Canvas with Hover-to-Play & Click Toggle */}
      <div 
        className="media-canvas-wrapper aspect-16-9 interactive-preview-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={togglePlay}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`Preview video: ICRA Module Content ${icraLanguage} (Hover or tap to play)`}
      >
        <video
          key={activeIcraSrc}
          ref={videoRef}
          src={activeIcraSrc}
          className="card-video-bg"
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={handleCanPlay}
          onWaiting={handleWaiting}
          onError={handleError}
        />

        <div className={`video-info-overlay ${isPlaying ? 'playing' : ''}`}>
          <div className="video-card-header">
            <span className="icra-org-tag">INCLUSIVE COUNSELORS & REHABILITATION ASSOCIATION</span>
            <div className="hover-status-chip">
              <span className={`chip-dot ${isPlaying ? 'active' : ''}`} />
              <span>{isPlaying ? 'PLAYING PREVIEW' : 'HOVER TO PREVIEW'}</span>
            </div>
          </div>

          {/* Loading Indicator */}
          {isLoading && !videoError && (
            <div className="video-loading-badge">
              <span className="spinner-mini" />
              <span>Loading {icraLanguage === 'hindi' ? 'Hindi' : 'English'} Video...</span>
            </div>
          )}

          {/* Error Fallback */}
          {videoError && (
            <div className="video-error-state" onClick={(e) => e.stopPropagation()}>
              <AlertCircle size={22} className="error-icon" />
              <span className="error-title">ICRA Video Error ({icraLanguage.toUpperCase()})</span>
              <span className="error-desc">{videoError}</span>
              <button
                type="button"
                className="retry-btn"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
              >
                <RefreshCw size={13} />
                <span>Retry</span>
              </button>
            </div>
          )}

          {/* Center Play Button on paused */}
          {!videoError && !isPlaying && (
            <div className="play-control-center" aria-hidden="true">
              <div className="liquid-glass-play-btn">
                <Play size={20} className="indent-play" />
              </div>
            </div>
          )}

          {/* Bottom Scrubber & Controls */}
          {!videoError && (
            <div className="video-bottom-strip">
              <span className="video-badge-mini">
                {icraLanguage === 'hindi' ? 'Hindi Edition' : 'English Edition'}
              </span>

              <div className="player-scrub-cluster" onClick={(e) => e.stopPropagation()}>
                <div 
                  className="scrubber-bar horizontal-scrub" 
                  onClick={handleScrub} 
                  role="progressbar" 
                  aria-valuenow={progressPercent} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                >
                  <div className="scrubber-progress" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>

              <div className="video-controls-cluster">
                <div className="time-pill">
                  <span>{formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : (isLoading ? '--:--' : '00:00')}</span>
                </div>
                <button
                  type="button"
                  className="mute-btn-mini"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        ${commonVideoStyles}

        .icra-container-block {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .icra-lang-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: var(--radius-md);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .lang-label-group {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
        }

        .lang-icon {
          color: #2563eb;
        }

        .lang-caption {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .lang-toggle-pills {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .btn-lang-toggle {
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          border: 1px solid rgba(203, 213, 225, 0.8);
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .btn-lang-toggle:hover {
          color: #0f172a;
          border-color: rgba(147, 197, 253, 0.9);
        }

        .btn-lang-toggle.active {
          color: #1d4ed8;
          background: rgba(239, 246, 255, 0.95);
          border-color: rgba(147, 197, 253, 0.95);
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08);
        }
      `}</style>
    </div>
  );
}

// ------------------------------------------------------------------
// STYLES
// ------------------------------------------------------------------
const reelStyles = `
  .reel-wrapper-9-16 {
    width: 100%;
    background: #090e17;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid rgba(226, 232, 240, 0.9);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  }

  .reel-portrait-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    background: linear-gradient(135deg, #090e17 0%, #0f172a 100%);
    min-height: 480px;
  }

  @media (max-width: 768px) {
    .reel-portrait-container {
      grid-template-columns: 100%;
    }
  }

  .reel-video-viewport {
    position: relative;
    aspect-ratio: 9 / 16;
    max-height: 520px;
    width: 100%;
    margin: auto;
    background: #000000;
    overflow: hidden;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    outline: none;
  }

  .reel-video-viewport:focus-visible {
    box-shadow: inset 0 0 0 2px #3b82f6;
  }

  @media (max-width: 768px) {
    .reel-video-viewport {
      max-width: 320px;
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  .reel-video-element {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .reel-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 14px;
    background: linear-gradient(180deg, rgba(9, 14, 23, 0.65) 0%, transparent 35%, transparent 65%, rgba(9, 14, 23, 0.85) 100%);
    color: #ffffff;
    transition: background 0.3s ease;
  }

  .reel-overlay.overlay-playing {
    background: linear-gradient(180deg, rgba(9, 14, 23, 0.25) 0%, transparent 30%, transparent 70%, rgba(9, 14, 23, 0.5) 100%);
  }

  .reel-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .reel-source-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: #93c5fd;
    background: rgba(15, 23, 42, 0.75);
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .dot-live {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #3b82f6;
    box-shadow: 0 0 6px #60a5fa;
  }

  .dot-live.pulse {
    background: #10b981;
    box-shadow: 0 0 6px #34d399;
  }

  .reel-mute-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: background 0.2s ease;
  }

  .reel-mute-btn:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .reel-center-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .reel-bottom-controls {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .scrubber-bar {
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
  }

  .scrubber-progress {
    height: 100%;
    background: #3b82f6;
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(59, 130, 246, 0.8);
  }

  .reel-time-strip {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: #cbd5e1;
  }

  .time-dur {
    color: #94a3b8;
  }

  .reel-companion-pane {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
  }

  .reel-workflow-badge {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .badge-tag {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: #60a5fa;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  .badge-org {
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
  }

  .badge-theme {
    font-size: 0.78rem;
    color: #cbd5e1;
  }

  .reel-frames-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .frame-box {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    padding: 10px 8px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .frame-time {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: #93c5fd;
    font-weight: 600;
  }

  .frame-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #ffffff;
  }

  .frame-tool {
    font-size: 0.65rem;
    color: #94a3b8;
  }

  .instagram-link-slot {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .btn-instagram-reel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(225, 48, 108, 0.15);
    border: 1px solid rgba(225, 48, 108, 0.35);
    color: #ffffff;
    font-size: 0.8125rem;
    font-weight: 600;
    padding: 10px 14px;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .btn-instagram-reel:hover {
    background: rgba(225, 48, 108, 0.25);
    border-color: rgba(225, 48, 108, 0.6);
  }

  .ml-auto {
    margin-left: auto;
  }
`;

const commonVideoStyles = `
  .media-canvas-wrapper {
    position: relative;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: #090e17;
    border: 1px solid rgba(226, 232, 240, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  }

  .interactive-preview-card {
    cursor: pointer;
    outline: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .interactive-preview-card:focus-visible {
    box-shadow: 0 0 0 3px #3b82f6;
  }

  .aspect-16-9 {
    aspect-ratio: 16 / 9;
  }

  .card-video-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-info-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px;
    background: linear-gradient(180deg, rgba(9, 14, 23, 0.55) 0%, transparent 35%, transparent 65%, rgba(9, 14, 23, 0.85) 100%);
    color: #ffffff;
    transition: background 0.3s ease;
  }

  .video-info-overlay.playing {
    background: linear-gradient(180deg, rgba(9, 14, 23, 0.35) 0%, transparent 30%, transparent 70%, rgba(9, 14, 23, 0.7) 100%);
  }

  .video-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-mono);
    font-size: 0.65rem;
  }

  .opi-org-tag, .icra-org-tag {
    color: #60a5fa;
    font-weight: 600;
  }

  .hover-status-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.16);
    padding: 4px 10px;
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 0.62rem;
    font-weight: 700;
    color: #cbd5e1;
    letter-spacing: 0.04em;
  }

  .chip-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #60a5fa;
  }

  .chip-dot.active {
    background: #10b981;
    box-shadow: 0 0 6px #34d399;
  }

  .play-control-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: opacity 0.25s ease;
  }

  .liquid-glass-play-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.85);
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.9), 0 8px 24px rgba(0, 0, 0, 0.35);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .indent-play {
    margin-left: 2px;
  }

  .video-bottom-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .opi-lower-third-mini {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 12px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }

  .lt-name {
    font-size: 0.75rem;
    color: #ffffff;
    font-weight: 600;
  }

  .lt-meta {
    font-size: 0.65rem;
    color: #94a3b8;
  }

  .player-scrub-cluster {
    flex: 1;
    max-width: 280px;
    margin: 0 8px;
  }

  .horizontal-scrub {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 3px;
    cursor: pointer;
  }

  .video-badge-mini {
    font-size: 0.72rem;
    color: #cbd5e1;
    font-family: var(--font-mono);
  }

  .video-controls-cluster {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .time-pill {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: #cbd5e1;
    background: rgba(15, 23, 42, 0.7);
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .mute-btn-mini {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .mute-btn-mini:hover {
    background: rgba(255, 255, 255, 0.28);
  }

  .video-loading-badge {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: #cbd5e1;
    backdrop-filter: blur(8px);
  }

  .spinner-mini {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .video-error-state {
    position: absolute;
    inset: 20px;
    background: rgba(15, 23, 42, 0.92);
    border: 1px solid rgba(239, 68, 68, 0.4);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    text-align: center;
    color: #ffffff;
  }

  .error-icon {
    color: #ef4444;
  }

  .error-title {
    font-weight: 700;
    font-size: 0.9rem;
  }

  .error-desc {
    font-size: 0.75rem;
    color: #94a3b8;
    max-width: 320px;
  }

  .retry-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 4px;
    transition: background 0.2s ease;
  }

  .retry-btn:hover {
    background: rgba(255, 255, 255, 0.22);
  }
`;

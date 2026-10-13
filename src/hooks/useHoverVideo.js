import { useState, useRef, useEffect, useCallback } from 'react';

// Global coordinator to ensure only ONE video preview plays at any time across the page
let globalActiveVideoId = null;
const globalListeners = new Set();

const setGlobalActiveVideo = (id) => {
  globalActiveVideoId = id;
  globalListeners.forEach((listener) => listener(id));
};

export function useHoverVideo({ id, src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect user motion preferences
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mql.matches);
      const listener = (e) => setReducedMotion(e.matches);
      mql.addEventListener('change', listener);
      return () => mql.removeEventListener('change', listener);
    }
  }, []);

  // Listen to global coordinator: pause if another video starts playing
  useEffect(() => {
    const handleActiveChange = (activeId) => {
      if (activeId !== id && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };
    globalListeners.add(handleActiveChange);
    return () => {
      globalListeners.delete(handleActiveChange);
    };
  }, [id]);

  // When src changes (e.g. ICRA Hindi/English toggle), pause and reset
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setIsLoading(true);
      setVideoError(null);
    }
  }, [src]);

  // Hover In (Desktop)
  const handleMouseEnter = useCallback(() => {
    if (reducedMotion) return; // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      // If primary pointer cannot hover (e.g. mobile touchscreen), don't trigger mouseenter
      if (!window.matchMedia('(hover: hover)').matches) return;
    }

    const video = videoRef.current;
    if (!video || videoError) return;

    if (video.ended) {
      video.currentTime = 0;
    }
    video.muted = true;
    setIsMuted(true);

    setGlobalActiveVideo(id);
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((err) => {
          if (err.name !== 'AbortError') {
            console.warn(`[useHoverVideo] Playback prevented for ${id}:`, err);
          }
        });
    }
  }, [id, reducedMotion, videoError]);

  // Hover Out (Desktop)
  const handleMouseLeave = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
    if (globalActiveVideoId === id) {
      globalActiveVideoId = null;
    }
  }, [id]);

  // Intentional Click / Tap (Desktop intentional play or Mobile tap)
  const togglePlay = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const video = videoRef.current;
    if (!video || videoError) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      if (video.ended) {
        video.currentTime = 0;
      }
      setGlobalActiveVideo(id);
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn(`[useHoverVideo] Play error for ${id}:`, err);
            setIsPlaying(false);
          });
      }
    }
  }, [id, isPlaying, videoError]);

  // Keyboard accessibility (Space or Enter key)
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePlay(e);
    }
  }, [togglePlay]);

  const toggleMute = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback((e) => {
    const d = e.target.duration;
    if (d && !isNaN(d) && isFinite(d)) {
      setDuration(d);
      setIsLoading(false);
      setVideoError(null);
    }
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleWaiting = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleError = useCallback((e) => {
    const err = videoRef.current?.error;
    console.error(`[useHoverVideo] Video error for ${id}:`, err);
    setVideoError(err?.message || 'Failed to load media file.');
    setIsLoading(false);
    setIsPlaying(false);
  }, [id]);

  const handleScrub = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = Math.max(0, Math.min(duration, (clickX / rect.width) * duration));
    video.currentTime = newTime;
    setCurrentTime(newTime);
  }, [duration]);

  return {
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
    handleScrub,
    setIsLoading
  };
}

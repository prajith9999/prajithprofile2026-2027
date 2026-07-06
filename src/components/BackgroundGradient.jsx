import { useEffect, useRef, useState } from 'react';
import './BackgroundGradient.css';

const BG_VIDEO_SRC = '/assets/bg-ambient.mp4';

export default function BackgroundGradient() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const onReady = () => {
      setVideoReady(true);
      video.pause();
    };

    const onError = () => {
      setVideoFailed(true);
      setVideoReady(false);
    };

    video.addEventListener('loadeddata', onReady);
    video.addEventListener('error', onError);
    video.load();

    return () => {
      video.removeEventListener('loadeddata', onReady);
      video.removeEventListener('error', onError);
    };
  }, []);

  const sceneClass = [
    'bg-gradient-scene',
    videoReady && !videoFailed ? 'bg-gradient-scene--video' : '',
    videoFailed ? 'bg-gradient-scene--fallback' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={sceneClass} aria-hidden="true">
      <div className="bg-video-layer">
        <video
          ref={videoRef}
          className="bg-video"
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src={BG_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <div className="bg-fluid-layer" aria-hidden="true">
        <div className="bg-fluid-wave bg-fluid-wave--a" />
        <div className="bg-fluid-wave bg-fluid-wave--b" />
        <div className="bg-fluid-wave bg-fluid-wave--c" />
      </div>

      <div className="bg-gradient-base" />
      <div className="bg-gradient-mesh" />
      <div className="bg-gradient-blob bg-gradient-blob--red" />
      <div className="bg-gradient-blob bg-gradient-blob--crimson" />
      <div className="bg-gradient-blob bg-gradient-blob--amber" />
      <div className="bg-gradient-blob bg-gradient-blob--violet" />
      <div className="bg-gradient-tint" />
      <div className="bg-film-grain" />
      <div className="bg-gradient-vignette" />
    </div>
  );
}

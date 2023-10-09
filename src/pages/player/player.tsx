import VideoPlayer from '../../components/video-player';
import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';

export interface PlayerProps {
  videoLink: string;
  posterImage: string;
  name: string;
}

export default function Player({ name, videoLink, posterImage }: PlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const navigate = useNavigate();
  const id = Number(useParams().id);

  function handlePlay() {
    ref.current?.play();
    setIsPlaying(true);
  }

  function handlePause() {
    ref.current?.pause();
    setIsPlaying(false);
  }

  return (
    <div className="player">
      <VideoPlayer videoLink={videoLink} posterImage={posterImage} ref={ref} />
      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(AppRoutes.Film.replace(':id', id.toString()))}
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          {isPlaying ? (
            <button type="button" className="player__play" onClick={handlePause}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={handlePlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

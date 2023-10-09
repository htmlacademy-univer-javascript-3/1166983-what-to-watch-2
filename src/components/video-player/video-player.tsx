import { forwardRef } from 'react';

export interface VideoPlayerProps {
  videoLink: string;
  posterImage: string;
  onTimeUpdate?: () => void;
  muted?: boolean;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>((
  {
    videoLink,
    posterImage,
    onTimeUpdate,
    muted = false
  },
  ref
) => (
  <video
    ref={ref}
    className="player__video"
    poster={posterImage}
    onTimeUpdate={onTimeUpdate}
    muted={muted}
  >
    <source src={videoLink} />
  </video>
));

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;

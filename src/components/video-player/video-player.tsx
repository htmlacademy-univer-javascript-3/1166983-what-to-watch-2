import { forwardRef } from 'react';

export interface VideoPlayerProps {
  videoLink: string;
  posterImage: string;
  muted?: boolean;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>((
  {
    videoLink,
    posterImage,
    muted = false
  },
  ref
) => (
  <video
    ref={ref}
    className="player__video"
    poster={posterImage}
    muted={muted}
  >
    <source src={videoLink} type="video/mp4" />
  </video>
));

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;

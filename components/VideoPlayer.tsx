
import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-lg">
      <video
        className="w-full h-full"
        controls
        muted
        loop
        playsInline
        src={src}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

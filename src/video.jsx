import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://amyxjhuang.github.io/nightshift.mp4"
    />
  );
};

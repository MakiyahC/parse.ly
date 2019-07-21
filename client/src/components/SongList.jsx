import React from 'react';

import SongListEntry from './SongListEntry.jsx';

const SongList = (props) => {
  const { songs, polarity, songTitleClick } = props;
  let songview;
  if (polarity === 'positive') {
    songview = songs.filter(song => song.polarity === 'positive')
      .map((song, i) => <SongListEntry song={song} key={i} songTitleClick={songTitleClick} />);
  } else if (polarity === 'negative') {
    songview = songs.filter(song => song.polarity === 'negative')
      .map((song, i) => <SongListEntry song={song} key={i} songTitleClick={songTitleClick} />);
  }

  return (
    <div className="song-list">
      {/* <SongListEntry /> */}
      {/* Map over each Song Entry to render in list form */}
      {/* {this props object will have an array of objects that will have
      these properties
      -songname
      -artist
      -score
      -polarity} */}
      {songview}
    </div>
  );
};

export default SongList;

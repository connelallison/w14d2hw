import React from "react";
import Song from "./Song";

const SongList = (props) => {
  if (!props.songs) return null;

    const songNodes = props.songs.map(song => {
      return (
        <Song
        image={song["im:image"][2].label}
        artist={song["im:artist"].label}
        album={song["im:collection"]["im:name"].label}
        genre={song.category.attributes.label}
        releaseDate={song["im:releaseDate"].attributes.label}
        price={song["im:price"].label}
        key={props.songs.indexOf(song)}
        rank={props.songs.indexOf(song)}
        preview={song.link[1].attributes.href}
        >{song["im:name"].label}</Song>
      );
    });

    return (
      <div className="song-list">
        {songNodes}
      </div>
    )

}

export default SongList;

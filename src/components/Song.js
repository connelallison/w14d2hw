import React from "react";

const Song = (props) => {

    return (
      <div className="song">
        <h4>{props.children}</h4>
        <img src={props.image} alt={props.children}/>
        <p>Artist: {props.artist}</p>
        <p>Album: {props.album}</p>
        <p>Genre: {props.genre}</p>
        <p>Released: {props.releaseDate}</p>
        <p>Price: {props.price}</p>
        <p>Chart position: {props.rank + 1}</p>
        <audio controls src={props.preview}></audio>
      </div>
    );

}

export default Song;

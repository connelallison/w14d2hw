import React from 'react';
import SongList from '../components/SongList';
import Request from "../helpers/request";

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new Request();
    request.get(url).then(data => this.setState({songs: data.feed.entry}));

  }

  render(){
    if (!this.state.songs) return <p>Loading data...</p>;
    return (
      <div>
        <h2>Top 20 Songs</h2>
        <SongList songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongContainer;

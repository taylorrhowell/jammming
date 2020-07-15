import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults: [
      {
        name: "Savior",
        artist: "Rise Against",
        album: "Appeal to Reason",
        id: 1
      }, {
        name: "Satellite",
        artist: "Rise Against",
        album: "Endgame",
        id: 2
      }, {
        name: "Prayer of the Refugee",
        artist: "Rise Against",
        album: "The Sufferer and The Witness",
        id: 3
      }],
      playlistName: "test",
      playlistTracks: [{
        name: "Black Market",
        artist: "Rise Against",
        album: "Black Market",
        id: 4
      }, {
        name: "Tragedy + Time",
        artist: "Rise Against",
        album: "Black Market",
        id: 5
      }]
     };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    this.state.playlistTracks.map(playlistTrack => {
      if (playlistTrack.id != track.id) {
        this.state.playlistTracks.push(track)
      }
    })
  }

  render() {
    return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className='App'>
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    )
  }
}
export default App;
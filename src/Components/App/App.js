import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchResults: [
      {
        name: "Savior",
        artist: "Rise Against",
        album: "Appeal to Reason"
      }, {
        name: "Satellite",
        artist: "Rise Against",
        album: "Endgame"
      }, {
        name: "Prayer of the Refugee",
        artist: "Rise Against",
        album: "The Sufferer and The Witness"
      }],
      playlistName: "test",
      playlistTracks: [{
        name: "Black Market",
        artist: "Rise Against",
        album: "Black Market",
        id: 1
      }, {
        name: "Tragedy + Time",
        artist: "Rise Against",
        album: "Black Market",
        id: 1
      }]
     }
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
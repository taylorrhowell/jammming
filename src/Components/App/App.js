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
      playlistName: "",
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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
  } else {
      this.state.playlistTracks.push(track);
      this.setState(this.state);
    }
  }

  removeTrack(track) {
    const filteredTracks = this.state.playlistTracks.filter(Tracks => Tracks.id !== track.id);
    this.setState({playlistTracks: filteredTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className='App'>
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
        </div>
      </div>
    </div>
    )
  }
}
export default App;
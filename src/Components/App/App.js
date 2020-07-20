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
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.id)
    return trackURIs;
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className='App'>
        <SearchBar onSearch={this.search}/>
        <div className='App-playlist'>
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
    )
  }
}
export default App;
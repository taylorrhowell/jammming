import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange() {
        this.props.onNameChange(document.getElementById('Playlist').value);
        return console.log(this.props.playlistName);
    }

    render() {
        return (
            <div className='Playlist'>
                <input id="Playlist" defaultValue='New Playlist' onChange={this.handleNameChange}/>
                {<TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove}/>}
                <button className='Playlist-save' onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;
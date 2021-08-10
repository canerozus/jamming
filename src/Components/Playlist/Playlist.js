import React, { Component } from 'react';
import "./Playlist.css";
import TrackList from '../TrackList/TrackList';

export default class Playlist extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(e){
        this.props.onNameChange(e.target.value);
    }
    render() {
        return (
            <div className="Playlist">
                <input value={this.props.playlistName} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTrack} onRemove={this.props.onRemove}  isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
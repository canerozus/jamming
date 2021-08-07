import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultvalue={'New Playlist'} />
                 < TrackList tracks={this.props.playListTracks}
                            onRemove={this.props.onRemove}
                            isRemoval={true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
export default Playlist;
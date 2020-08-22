import React from 'react';
import './PlayList.css';

class PlayList extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultvalue={"New Playlist"}/>
                {/* <TrackList /> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
export default PlayList;
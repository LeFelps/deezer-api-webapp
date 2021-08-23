import React from 'react';
import { connect } from 'react-redux';
import './player.css'
import { secondsToMinutes } from '../../methods/songMethods';

var audio = new Audio();
var playing = false

const playPause = (track) =>{

        if (playing === true){
            audio.pause()
            playing = false
        }
        else {
            audio = new Audio(track.preview)
            audio.play()
            playing = true
        }

}

const Player = ({ activeSong, dispatch }) => (
    
    <div className="footer flex">
        <div className="play-button" onClick={() => playPause(activeSong)} >
            <svg className="play-button-icon" focusable="false" height="" role="img" width="22" viewBox="0 0 12 12" aria-hidden="true"><path clipRule="evenodd" fillRule="evenodd"  d="M2.5.5v11l9-5.5z"></path></svg>
        </div>
        <div className="song-info-box">
            <div className="flex">
                <p className="song-title" >{activeSong.title}</p>
                <p className="song-artist" >{activeSong.artist.name}</p>
            </div>
            <p className="song-duration">{secondsToMinutes(activeSong.duration)}</p>
        </div>
    </div>
) 

const mapStateToProps = (state) => {
    return {
        activeSong: state.rootReducer.songList.activeSong
    }
}


export default connect(mapStateToProps)(Player)

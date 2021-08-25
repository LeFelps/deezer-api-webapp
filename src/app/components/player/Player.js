import React from 'react';
import { connect } from 'react-redux';

//importing css style for component
import './player.css'

//importing songMethods (secondsToMinutes: recieves a integer value (in seconds) and changes it to minutes:seconds (00:00))
import { secondsToMinutes } from '../../methods/songMethods';


// audio variable that will revieve the "currentSong" preview property for playing (link to mp3 file)
var audio = new Audio();

// boolean variable that defines if the song is playing
var playing = false


// arrow function for pausing audio and changing "playing" value to false (called at component mounting) 
const autoPause = (track) =>{
    if (playing === true){
        audio.pause()
        playing = false
    } 
}

// arrow function for pausing and playing audio of current track depending os "playing" value and changing it (called at button press)
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

// player component exported by default
const Player = ({ activeSong, dispatch }) => (
    <div className="footer flex">
        {autoPause(activeSong)}
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

// function to map the store state to the component props
const mapStateToProps = (state) => {
    return {
        activeSong: state.songList.activeSong
    }
}

export default connect(mapStateToProps)(Player)

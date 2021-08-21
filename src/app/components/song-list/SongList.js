import React, { Component } from 'react';
import axios from 'axios'
import './songList.css'

var audio = new Audio()
class SongList extends Component {
    constructor(props) {
        super(props);
        this.play = this
            .play
            .bind(this);
    }
    state = {
        songs:  [],
        
    }
    play(track){
        audio.pause()
        audio = new Audio(track.preview)
        audio.play()
    }

    componentDidMount(){
        var config = {
            method: 'get',
            url: '/chart/tracks?index=0&limit=100',
        };
        
        axios(config)
            .then(res => {
                this.setState({ 
                    songs: res.data.tracks.data
                });
            })
            .catch(error => {
                console.log(error);
            });
        
            
    }
    secondsToMinutes(time){

        var mind = time % (60 * 60);
        var minutes = Math.floor(mind / 60);
    
        var secd = mind % 60;
        var seconds = Math.ceil(secd);
    
        
        if (minutes < 10){
            minutes = "0"+minutes
        }
        if (seconds < 10){
            seconds = "0"+seconds
        }
    
        return minutes + ":" + seconds
    }
    render () {
        const { songs } = this.state
        return (
            <div>
                <p className="section-name">Principais músicas do momento</p>
                <div className="flex">
                
                
                    
                    {songs.map((songInfo, index)=>{
                        return <div className="song" key={songInfo.id}>
                                <a href={songInfo.link}>
                                    <img className="album-cover" src={songInfo.album.cover_big} alt=""></img>
                                </a>
                                <div className="flex button-box">
                                {/* <div key={index} onClick={this.play(songInfo)}> */}
                                    <div key={index}  onClick={() => { this.play(songInfo) }}>
                                        <div className="button">
                                            <svg className="button-icon" focusable="false" height="16" role="img" width="16" viewBox="0 0 12 12" aria-hidden="true"><path clipRule="evenodd" fillRule="evenodd"  d="M2.5.5v11l9-5.5z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="button" >
                                        <svg className="button-icon" focusable="false" height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><path clipRule="evenodd" fillRule="evenodd" d="M11.381 20.41c.402.385.619.59.619.59s3.475-3.276 8.34-8.338c4.694-4.98-1.427-13.749-7.66-7.493a11.246 11.246 0 0 0-.68.744l-.043-.05c-.212-.25-.425-.48-.637-.693-6.233-6.25-12.354 2.608-7.66 7.492a279.09 279.09 0 0 0 7.72 7.747z"></path></svg>
                                    </div>
                                    <a href={songInfo.link} >
                                        <div className="button">
                                        <svg className="button-icon" focusable="false" height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><path stroke="black" fill="black" clipRule="evenodd" fillRule="evenodd" d="M13 22.481v-6.447c-2.683.2-5.126 1.239-6.988 2.315a21.856 21.856 0 0 0-2.456 1.653 16.905 16.905 0 0 0-.863.719l-.008.007v.001L.291 22.98l.733-3.202L2 20s.502-.472 1.39-1.126c1.864-1.376 5.43-3.555 9.61-3.844a13.297 13.297 0 0 1 1-.03v4.985l3.922-4.11L22 12l-8-8v4c-7.113.916-10.293 7.148-11.448 10.251A15.461 15.461 0 0 0 2 20l-.975-.223v-.002l.001-.003.003-.01.007-.029.026-.104c.022-.088.056-.214.102-.373a21.47 21.47 0 0 1 2.417-5.332c1.792-2.82 4.76-5.877 9.419-6.776V1.586l10.432 10.43-4.803 4.568L13 22.48z"></path></svg>
                                        </div>
                                    </a>
                                </div>
                                <p className="song-title">{songInfo.title}</p>
                                <p className="song-artist">{songInfo.artist.name}</p>
                                <p className="song-duration">{this.secondsToMinutes(songInfo.duration)}</p>
                            </div>
                    })}
                </div>
            </div>
        )
    }
}

export default SongList
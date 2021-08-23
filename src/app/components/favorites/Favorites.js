import React from 'react';
import '../song-list/songList.css'
import { connect } from 'react-redux';
import * as songActions from '../../actions/SongActions'
import { secondsToMinutes, filteredSongs } from '../../methods/songMethods';

const Favorites = ({favoriteSongs, filter, dispatch}) => (
    <div>
        <p className="section-name">Suas músicas favoritas</p>
        <div className="flex">    
            {filteredSongs(favoriteSongs, filter).map(song =>{
                return <div className="song" key={song.id}>
                        <a href={song.link}>
                            <img className="album-cover" src={song.album.cover_big} alt=""></img>
                        </a>
                        <div className="flex button-box">
                            <div key={song.id}  onClick={() => dispatch(songActions.setActiveSong(song))}>
                                <div className="button">
                                    <svg className="button-icon" focusable="false" height="16" role="img" width="16" viewBox="0 0 12 12" aria-hidden="true"><path clipRule="evenodd" fillRule="evenodd"  d="M2.5.5v11l9-5.5z"></path></svg>
                                </div>
                            </div>
                            <div className="button" onClick={() => dispatch(songActions.removeFavoriteSong(song))}>
                                <svg className="button-icon" focusable="false" height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EF5466" clipRule="evenodd" fillRule="evenodd" d="M11.381 20.41c.402.385.619.59.619.59s3.475-3.276 8.34-8.338c4.694-4.98-1.427-13.749-7.66-7.493a11.246 11.246 0 0 0-.68.744l-.043-.05c-.212-.25-.425-.48-.637-.693-6.233-6.25-12.354 2.608-7.66 7.492a279.09 279.09 0 0 0 7.72 7.747z"></path></svg>
                            </div>
                            <a href={song.link} >
                                <div className="button">
                                <svg className="button-icon" focusable="false" height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><path stroke="black" fill="black" clipRule="evenodd" fillRule="evenodd" d="M13 22.481v-6.447c-2.683.2-5.126 1.239-6.988 2.315a21.856 21.856 0 0 0-2.456 1.653 16.905 16.905 0 0 0-.863.719l-.008.007v.001L.291 22.98l.733-3.202L2 20s.502-.472 1.39-1.126c1.864-1.376 5.43-3.555 9.61-3.844a13.297 13.297 0 0 1 1-.03v4.985l3.922-4.11L22 12l-8-8v4c-7.113.916-10.293 7.148-11.448 10.251A15.461 15.461 0 0 0 2 20l-.975-.223v-.002l.001-.003.003-.01.007-.029.026-.104c.022-.088.056-.214.102-.373a21.47 21.47 0 0 1 2.417-5.332c1.792-2.82 4.76-5.877 9.419-6.776V1.586l10.432 10.43-4.803 4.568L13 22.48z"></path></svg>
                                </div>
                            </a>
                        </div>
                        <p className="song-title">{song.title}</p>
                        <p className="song-artist">{song.artist.name}</p>
                        <p className="song-duration">{secondsToMinutes(song.duration)}</p>
                    </div>
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filter: state.rootReducer.nav.filter,
        favoriteSongs: state.rootReducer.songList.favoriteSongs
    }
}


export default connect(mapStateToProps)(Favorites)

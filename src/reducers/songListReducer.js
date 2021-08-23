import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSongData } from "../app/methods/deezerApi";

const initState = {
    activeSong: {
        artist: [],
        duration: 0,
    }, 
    favoriteSongs: [],
    songs:[
        {
            "id": 1439691951,
            "title": "INDUSTRY BABY",
            "title_short": "INDUSTRY BABY",
            "title_version": "",
            "link": "https://www.deezer.com/track/1439691952",
            "duration": 212,
            "rank": 997645,
            "explicit_lyrics": true,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-9.dzcdn.net/stream/c-99f593e355757003328afde5fac2bdbe-3.mp3",
            "md5_image": "a65e86966cfd34b2aa292856136ef9ac",
            "position": 57,
            "artist": {
              "id": 15166511,
              "name": "Lil Nas X",
              "link": "https://www.deezer.com/artist/15166511",
              "picture": "https://api.deezer.com/artist/15166511/image",
              "picture_small": "https://cdns-images.dzcdn.net/images/artist/e645a215208b825df07277d80299758d/56x56-000000-80-0-0.jpg",
              "picture_medium": "https://cdns-images.dzcdn.net/images/artist/e645a215208b825df07277d80299758d/250x250-000000-80-0-0.jpg",
              "picture_big": "https://cdns-images.dzcdn.net/images/artist/e645a215208b825df07277d80299758d/500x500-000000-80-0-0.jpg",
              "picture_xl": "https://cdns-images.dzcdn.net/images/artist/e645a215208b825df07277d80299758d/1000x1000-000000-80-0-0.jpg",
              "radio": true,
              "tracklist": "https://api.deezer.com/artist/15166511/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": 245878832,
              "title": "INDUSTRY BABY",
              "cover": "https://api.deezer.com/album/245878832/image",
              "cover_small": "https://cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/250x250-000000-80-0-0.jpg",
              "cover_big": "https://cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/1000x1000-000000-80-0-0.jpg",
              "md5_image": "a65e86966cfd34b2aa292856136ef9ac",
              "tracklist": "https://api.deezer.com/album/245878832/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1451144022,
            "title": "Quer Voar",
            "title_short": "Quer Voar",
            "title_version": "",
            "link": "https://www.deezer.com/track/1451144022",
            "duration": 187,
            "rank": 997873,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-0.dzcdn.net/stream/c-079cf195cc5a22d08269bd95ffc4e2e2-3.mp3",
            "md5_image": "d55994c64798a408619d647c60e1c249",
            "position": 17,
            "artist": {
              "id": 11329214,
              "name": "Matuê",
              "link": "https://www.deezer.com/artist/11329214",
              "picture": "https://api.deezer.com/artist/11329214/image",
              "picture_small": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/56x56-000000-80-0-0.jpg",
              "picture_medium": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/250x250-000000-80-0-0.jpg",
              "picture_big": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/500x500-000000-80-0-0.jpg",
              "picture_xl": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/1000x1000-000000-80-0-0.jpg",
              "radio": true,
              "tracklist": "https://api.deezer.com/artist/11329214/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": 248550452,
              "title": "Quer Voar",
              "cover": "https://api.deezer.com/album/248550452/image",
              "cover_small": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/250x250-000000-80-0-0.jpg",
              "cover_big": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/1000x1000-000000-80-0-0.jpg",
              "md5_image": "d55994c64798a408619d647c60e1c249",
              "tracklist": "https://api.deezer.com/album/248550452/tracks",
              "type": "album"
            },
            "type": "track"
          },
    ]
}
    
const songListReducer = (state = initState, action) => {
    if (action.type === 'SET_ACTIVE_SONG'){
        return {
            ...state, activeSong: action.activeSong
        }
    } else if (action.type === 'ADD_FAVORITE_SONG'){
    
        for(var i = 0; i < state.favoriteSongs.length; i++) {
            if (state.favoriteSongs[i].id === action.favoriteSongs.id) {
                return state
            }
        }
        return{
            ...state, favoriteSongs: [ ...state.favoriteSongs, action.favoriteSongs]
        }

    } else if (action.type === 'REMOVE_FAVORITE_SONG'){

        return {
            ...state,
            favoriteSongs: state.favoriteSongs.filter((favoriteSong) => favoriteSong.id !== action.favoriteSongs.id)
        }


    }

    return state

}

export default songListReducer  
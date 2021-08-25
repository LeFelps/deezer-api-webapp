    const initState = {
    activeSong: {
        artist: [],
        duration: 0,
    }, 
    favoriteSongs: [],
    songs:[]
}
    
const songListReducer = (state = initState, action) => {
    if (action.type === 'GET_SONGS'){   
        return {
            ...state, songs: action.response.data.tracks.data}
    } else if (action.type === 'SET_ACTIVE_SONG'){
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
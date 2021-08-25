// setting a initialState so state does not return 'undefined'
const initState = {
    activeSong: {
        artist: [],
        duration: 0,
    }, 
    favoriteSongs: [],
    songs:[]
}


// defining the reducer to watch for dispatched actions
const songListReducer = (state = initState, action) => {

    if (action.type === 'GET_SONGS'){   
        //action dispatched asyc by redux-saga
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
    
    // returning state by default
    return state

}

export default songListReducer  
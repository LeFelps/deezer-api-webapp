//dispatched actions are recieved by reducers (SongListReducer)

//action that sends the information of the selected track to be displayed by the Player component
export function setActiveSong(activeSong) {
    return   {
        type: 'SET_ACTIVE_SONG',
        activeSong
    };
}

//action that adds the selected song to the favoriteSongs array
export function addFavoriteSong(favoriteSongs) {
    return   {
        type: 'ADD_FAVORITE_SONG',
        favoriteSongs
    };
}

//action that removes the selected song to from favoriteSongs array
export function removeFavoriteSong(favoriteSongs) {
    return   {
        type: 'REMOVE_FAVORITE_SONG',
        favoriteSongs
    };
}
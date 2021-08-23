export function setActiveSong(activeSong) {
    return   {
        type: 'SET_ACTIVE_SONG',
        activeSong
    };
}


export function addFavoriteSong(favoriteSongs) {
    return   {
        type: 'ADD_FAVORITE_SONG',
        favoriteSongs
    };
}

export function removeFavoriteSong(favoriteSongs) {
    return   {
        type: 'REMOVE_FAVORITE_SONG',
        favoriteSongs
    };
}

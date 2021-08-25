//dispatched actions are recieved by reducers (sagas => SongListReducer)

//action to be dispatched by the app and recieved by redux-saga, then calling the API async and dispatching 'GET_SONG' action, passing recieved songs to the state
export function getApiSongs(){
    return {
        type:'ASYNC_GET_SONGS',
    }
}
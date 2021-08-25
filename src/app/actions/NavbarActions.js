//dispatched actions are recieved by reducers (NavReducer)

//action called to set a filter and a filtered search of songs to the state
export function filterSearch(filter, songs){
    return{
        type: "FILTER_SEARCH",
        filter,
        songs
    }
}

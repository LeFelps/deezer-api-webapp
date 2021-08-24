export function filterSearch(filter, songs){
    return{
        type: "FILTER_SEARCH",
        filter,
        songs
    }
}

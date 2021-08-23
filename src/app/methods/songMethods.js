export function secondsToMinutes(time) {

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



export function filteredSongs(songs, filter) {
    
    var filteredList = []

    filter = filter.toLowerCase()

    for (let i = 0; i < songs.length; i++) {
        console.log(songs[i]);
        if((songs[i].title).toLowerCase().includes(filter) || (songs[i].album.title).toLowerCase().includes(filter) || (songs[i].artist.name).toLowerCase().includes(filter))
        filteredList.push(songs[i])
        
    }

    return  filteredList

}
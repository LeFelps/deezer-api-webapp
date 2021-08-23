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
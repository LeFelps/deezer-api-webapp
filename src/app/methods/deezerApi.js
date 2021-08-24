import axios from "axios";

export function getSongData(config) {
    return new Promise((resolve) =>
        axios(config)
            .then(res => {
                resolve = res.data.tracks.data
            })
            .catch(error => {
                console.log(error);
            })
            
    );
  }


import axios from "axios";

// var config = {
//                 method: 'get',
//                 url: '/chart/tracks?index=0&limit=100',
//             };


export function getSongData(config) {
    return new Promise((resolve) =>
    //   setTimeout(() => resolve({ data: amount }), 500)
        axios(config)
            .then(res => {
                resolve = res.data.tracks.data
            })
            .catch(error => {
                console.log(error);
            })
            
    );
  }


// export const getSongs = () =>{

//     return (dispatch, getState) => {

        
//         var config = {
//             method: 'get',
//             url: '/chart/tracks?index=0&limit=100',
//         };
    
//         var response

//         axios(config)
//             .then(res => {
//                 response = res.data.tracks.data
//             })
//             .catch(error => {
//                 console.log(error);
//             });

//             console.log(response);


//       dispatch({ type: 'GET_SONGS', songs: response })
//     }

// } 


import {takeEvery, put, call, all} from 'redux-saga/effects'
import axios from 'axios';

// test function to confirm saga connectivity to the store
function* connectivityTest(){yield console.log('connected');}

//async function to get API data
function* asyncGetSongs() {
    
    //async API get request
    const response = yield call(axios.get,'/chart/tracks?index=0&limit=100')

    //dispatches a 'GET_SONGS' action carrying the API response with song data
    yield put({type: 'GET_SONGS', response});

    yield console.log('Songs Loaded');

}

//function that watches for 'ASYNC_GET_SONGS' action type dispatches and executes a API function
function* watchGetSongsAsync() {
    yield takeEvery('ASYNC_GET_SONGS', asyncGetSongs)
}


export default function* root(){
    yield all([
        connectivityTest(),
        watchGetSongsAsync()
    ]);
}

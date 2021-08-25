import {takeEvery, put, call, all} from 'redux-saga/effects'
import axios from 'axios';


function* connectivityTest(){yield console.log('connected');}

function* asyncGetSongs() {
    
    const response = yield call(axios.get,'/chart/tracks?index=0&limit=100')

    yield put({type: 'GET_SONGS', response});

    yield console.log('Songs Loaded');
}

function* watchGetSongsAsync() {
    yield takeEvery('ASYNC_GET_SONGS', asyncGetSongs)
}

export default function* root(){
    yield all([
        connectivityTest(),
        watchGetSongsAsync()
    ]);
}

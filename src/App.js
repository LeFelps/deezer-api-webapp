import React, { useEffect } from 'react';

// importing components
import SongList from './app/components/song-list/SongList';
import Favorites from './app/components/favorites/Favorites';
import Navbar from './app/components/navbar/Navbar'
import Player from './app/components/player/Player'

//importing css style
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

//importning app actions for dispatch
import * as appActions from './app/actions/AppActions'

//importing store to dispatch actions
import store from './app/store'

function App() {
  // dispatching 'ASYNC_GET_SONGS' on mount
  useEffect(() => store.dispatch(appActions.getApiSongs()), []);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"> 
        </header>
          <Navbar />
          <div className="content">
              <Route exact path='/' component={SongList}></Route>
              <Route path='/favorites' component={Favorites}></Route>
          </div>
          <Player />
      </div>
    </BrowserRouter>
  );
}

export default App;

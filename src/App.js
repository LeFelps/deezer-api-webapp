import React, { useEffect } from 'react';
import SongList from './app/components/song-list/SongList';
import Favorites from './app/components/favorites/Favorites';
import Navbar from './app/components/navbar/Navbar'
import Player from './app/components/player/Player'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import * as appActions from './app/actions/AppActions'
import store from './app/store'

function App() {
  // {console.log(dispatch(navActions.getApiSongs()))}
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

import React from 'react';
import SongList from './app/components/song-list/SongList';
import Favorites from './app/components/favorites/Favorites';
import Navbar from './app/components/navbar/Navbar.js'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;

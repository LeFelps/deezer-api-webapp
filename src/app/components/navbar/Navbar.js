import React from 'react';
import { connect } from 'react-redux';
import './navbar.css'
import {NavLink} from 'react-router-dom'
import * as navActions from '../../actions/NavbarActions'

const Navbar = ({filter, dispatch}) => (
    <div>
        <div className="navbar">
            <div>
                <svg className="icon" viewBox="-150 -47.8 1300 286.8"><g transform="translate(0 86.8)"><path d="M234.1 40.1c0 40.1 24.7 64.1 61.4 64.1 18.3 0 33.7-5.1 42.3-18.5v18.5h33.5v-191h-34.8v81.2C328.6-19 314-25 295.7-25c-35.8-.1-61.6 24.4-61.6 65.1zm103.5 0c0 22.9-15.6 37.2-34.3 37.2-19.4 0-34.3-14.3-34.3-37.2 0-23.3 15-37.9 34.3-37.9 18.7 0 34.3 14.8 34.3 37.9zm142 14.8c-4 14.8-14.1 22.2-30 22.2-18.5 0-33.7-11.2-34.1-31h87.7c1.1-4.9 1.6-10.1 1.6-15.8 0-35.5-24.2-55.5-59.9-55.5-38.1 0-64.3 27.1-64.3 63.9 0 41 28.9 65.6 68.9 65.6 30.2 0 50.7-12.6 59.7-37.7zm-64.1-32C418.8 8.6 430.7.2 445 .2c15.6 0 26.2 8.4 26.2 21.6l-.2 1.1zm193.2 32c-4 14.8-14.1 22.2-30 22.2-18.5 0-33.7-11.2-34.1-31h87.7c1.1-4.9 1.6-10.1 1.6-15.8 0-35.5-24.2-55.5-59.9-55.5-38.1 0-64.3 27.1-64.3 63.9 0 41 28.9 65.6 68.9 65.6 30.2 0 50.7-12.6 59.7-37.7zm-64.1-32C547.9 8.6 559.8.2 574.1.2c15.6 0 26.2 8.4 26.2 21.6l-.2 1.1zm212.1 81.5V72.9h-73.1l71.1-69.2v-28.8H642.2v30h68.7L640 74.4v30zm101.7-49.5c-4 14.8-14.1 22.2-30 22.2-18.5 0-33.7-11.2-34.1-31H882c1.1-4.9 1.6-10.1 1.6-15.8 0-35.5-24.2-55.5-59.9-55.5-38.1 0-64.3 27.1-64.3 63.9 0 41 28.9 65.6 68.9 65.6 30.2 0 50.7-12.6 59.7-37.7zm-64.1-32C797.6 8.6 809.5.2 823.8.2 839.4.2 850 8.6 850 21.8l-.2 1.1z"/><path fillRule="evenodd" clipRule="evenodd" fill="#40ab5d" d="M155.5-25.1h42.9V0h-42.9z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="255.826" x2="-111.943" y1="241.804" x1="-111.722" gradientUnits="userSpaceOnUse" id="a"><stop offset="0" stopColor="#358c7b"/><stop offset=".526" stopColor="#33a65e"/></linearGradient><path fill="url(#a)" fillRule="evenodd" clipRule="evenodd" d="M155.5 9.7h42.9v25.1h-42.9z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="235.917" x2="-99.772" y1="223.628" x1="-123.891" gradientUnits="userSpaceOnUse" id="b"><stop offset="0" stopColor="#222b90"/><stop offset="1" stopColor="#367b99"/></linearGradient><path fill="url(#b)" fillRule="evenodd" clipRule="evenodd" d="M155.5 44.5h42.9v25.1h-42.9z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="210.773" x2="-185.032" y1="210.773" x1="-208.432" gradientUnits="userSpaceOnUse" id="c"><stop offset="0" stopColor="#f90"/><stop offset="1" stopColor="#ff8000"/></linearGradient><path fill="url(#c)" fillRule="evenodd" clipRule="evenodd" d="M0 79.3h42.9v25.1H0z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="210.773" x2="-156.732" y1="210.773" x1="-180.132" gradientUnits="userSpaceOnUse" id="d"><stop offset="0" stopColor="#ff8000"/><stop offset="1" stopColor="#cc1953"/></linearGradient><path fill="url(#d)" fillRule="evenodd" clipRule="evenodd" d="M51.8 79.3h42.9v25.1H51.8z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="210.773" x2="-128.432" y1="210.773" x1="-151.832" gradientUnits="userSpaceOnUse" id="e"><stop offset="0" stopColor="#cc1953"/><stop offset="1" stopColor="#241284"/></linearGradient><path fill="url(#e)" fillRule="evenodd" clipRule="evenodd" d="M103.7 79.3h42.9v25.1h-42.9z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="210.773" x2="-100.16" y1="210.773" x1="-123.56" gradientUnits="userSpaceOnUse" id="f"><stop offset="0" stopColor="#222b90"/><stop offset="1" stopColor="#3559a6"/></linearGradient><path fill="url(#f)" fillRule="evenodd" clipRule="evenodd" d="M155.5 79.3h42.9v25.1h-42.9z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="233.464" x2="-127.508" y1="226.081" x1="-152.755" gradientUnits="userSpaceOnUse" id="g"><stop offset="0" stopColor="#cc1953"/><stop offset="1" stopColor="#241284"/></linearGradient><path fill="url(#g)" fillRule="evenodd" clipRule="evenodd" d="M103.7 44.5h42.9v25.1h-42.9z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="225.211" x2="-155.899" y1="234.334" x1="-180.965" gradientUnits="userSpaceOnUse" id="h"><stop offset=".003" stopColor="#fc0"/><stop offset="1" stopColor="#ce1938"/></linearGradient><path fill="url(#h)" fillRule="evenodd" clipRule="evenodd" d="M51.8 44.5h42.9v25.1H51.8z"/><linearGradient gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)" y2="239.791" x2="-158.699" y1="257.754" x1="-178.165" gradientUnits="userSpaceOnUse" id="i"><stop offset=".003" stopColor="#ffd100"/><stop offset="1" stopColor="#fd5a22"/></linearGradient><path fill="url(#i)" fillRule="evenodd" clipRule="evenodd" d="M51.8 9.7h42.9v25.1H51.8z"/><path d="M966.1 19.6v3.7h33.9v-9.9c0-22.2-13.9-38.3-37.2-38.3-15 0-25.6 7.3-31.1 19.4v-19.4h-35v129.3h35V21.1c0-13.2 7.1-20.5 18-20.5 10 .1 16.4 9.5 16.4 19z"/></g></svg>
            </div>
            <div className="searchbar">
                <svg className="search-icon" viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 gHFJOr topbar-search-icon"><g><path d="M13 7.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-1.43 5.07a6.5 6.5 0 1 1 .73-.685l2.054 2.054a.5.5 0 0 1-.708.707L11.57 12.57z"></path></g></svg>
                <input type="text" id="searchInput" placeholder="Buscar" value={filter} onChange={(event) => dispatch(navActions.filterSearch(event.target.value))}></input>
                
            </div>
        </div>
        <div>
            <div className="sidebar">
                <div className="sidebar-box">
                    <p>
                    Utilize a API gratuita do Deezer nos seus projetos também
                    </p>
                    <a href="https://developers.deezer.com/api">
                        <div className="sidebar-box-button">API</div>
                    </a>        
                </div>
                <div>
                    <NavLink to="/" exact={true}>
                        <div className={'side-button'}>
                            <svg className="side-icon" focusable="false" height="24" role="img" width="24" viewBox="0 0 24 24" aria-hidden="true"><path clipRule="evenodd" fillRule="evenodd" d="M21 2 8 4v12.9c-.635-.555-1.52-.9-2.5-.9C3.567 16 2 17.343 2 19s1.567 3 3.5 3S9 20.657 9 19V8.846l11-1.692V14.9c-.635-.555-1.52-.9-2.5-.9-1.933 0-3.5 1.343-3.5 3s1.567 3 3.5 3 3.5-1.343 3.5-3V2z"></path></svg>
                            <span>Música</span>
                        </div>
                    </NavLink>
                    <NavLink to="/favorites" activeClassName="active">
                        <div className={'side-button '} >
                            <svg className="side-icon" focusable="false" height="24" role="img" width="24" viewBox="0 0 24 24" aria-hidden="true"><path clipRule="evenodd" fillRule="evenodd" d="M11.381 20.41c.402.385.619.59.619.59s3.475-3.276 8.34-8.338c4.694-4.98-1.427-13.749-7.66-7.493a11.246 11.246 0 0 0-.68.744l-.043-.05c-.212-.25-.425-.48-.637-.693-6.233-6.25-12.354 2.608-7.66 7.492a279.09 279.09 0 0 0 7.72 7.747z"></path></svg>
                            <span>Favoritos</span>
                        </div>
                    </NavLink>
                </div>

            </div>
            
        </div>                
    </div> 

)

const mapStateToProps = (state) => {
    return {
        filter: state.nav.filter
    }
}

export default connect(mapStateToProps)(Navbar)
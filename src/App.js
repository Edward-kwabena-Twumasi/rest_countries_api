import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'


function App() {
    const themeState=useState("")
  return (
    <React.Fragment>
        <nav className="navbar justify-content-between navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand font-weight-bold" href="#">Where in the world?</a>
            <button className="theme-toggler">
                <FontAwesomeIcon icon="fa-solid fa-moon" color={'white'}/>
            </button>
        </nav>
    </React.Fragment>
  );
}

export default App;

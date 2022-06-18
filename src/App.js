import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'


function App() {
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all', {
            method: 'GET',
            mode: 'cors',
            /*origin: 'http://localhost:3000/',*/
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => res.json())
            .then(data => {
              console.log(data);
            })
            .catch(err => {
                alert(err)
                console.log(err);
            })

    },[])
    const [theme, setTheme] = useState("dark")
    return (
        <React.Fragment>
            <nav
                className={`navbar justify-content-between navbar-expand-lg shadow-sm p-3 mb-5 navbar-${theme} bg-${theme}`}>
                <a className="navbar-brand font-weight-bold" href="#">Where in the world?</a>
                <button className={`theme-toggler text-${theme === 'light' ? 'dark' : 'light'}`}
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    {`${theme === 'light' ? "Dark Mode" : "Light Mode"} `}
                    <FontAwesomeIcon
                        icon={`fa-solid ${theme === 'light' ? "fa-moon" : "fa fa-sun"}`}
                        color={theme === 'light' ? 'black' : 'white'}/>
                </button>
            </nav>
            <section className="container">
                <div className="row">
                    <div className="col-md-3 p-2">
                        <div className="card">

                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card">

                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card">

                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card">

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;

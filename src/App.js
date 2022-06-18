import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'


function App() {
    let [countries,setCountries]=useState([]);
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
                setCountries(data);
              console.log(data);
              console.log(data.length)
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
                    {
                        countries.map((country)=>{
                            return(
                                <div className="col-md-3 p-2">
                                    <div className="card" >
                                        <img className="card-img-top" src={country.flags.png} alt="Card image cap"/>
                                        <div className="card-body">
                                            <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                    {/*<div className="col-md-3 p-2">
                        <div className="card" >
                            <img className="card-img-top" src="..." alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card" >
                            <img className="card-img-top" src="..." alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card" >
                            <img className="card-img-top" src="..." alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>*/}
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;

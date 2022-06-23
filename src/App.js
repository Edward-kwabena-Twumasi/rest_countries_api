import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, createContext} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'
//import CountryList from "./components/CountryList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen";

export const ThemeContext = createContext();

function App() {

    let [countries, setCountries] = useState([]);
    let [continents, setContinents] = useState([]);
    let [displayContinentList, setDisplayContinentList] = useState([]);
    let [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        // console.log(filterDropDown.current);

        fetch('https://restcountries.com/v3.1/all', {
            method: 'GET',
            mode: 'cors',
            /*origin: 'http://localhost:3000/',*/
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => res.json())
            .then(data => {
                setContinents(Array.from(new Set(data.map((country) => country.region))))
                setCountries(data);
                setDisplayContinentList(data);
                setDisplayList(data);
                // console.log(filterDropDown.current.value);
                
            })
            .catch(err => {
                alert(err)
                console.log(err);
            })

    }, [])


    const [theme, setTheme] = useState("dark")
    return (
        <React.Fragment>
            <Router>
                <nav
                    className={`navbar justify-content-between navbar-expand-lg shadow-sm p-3 navbar-${theme} bg-${theme}`}>
                    <a className="navbar-brand font-weight-bold" href="#">Where in the world?</a>
                    <button className={`theme-toggler text-${theme === 'light' ? 'dark' : 'light'}`}
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        {`${theme === 'light' ? "Dark Mode" : "Light Mode"} `}
                        <FontAwesomeIcon
                            icon={`fa-solid ${theme === 'light' ? "fa-moon" : "fa fa-sun"}`}
                            color={theme === 'light' ? 'black' : 'white'}/>
                    </button>
                </nav>
                <ThemeContext.Provider value={{theme, countries, continents, setDisplayList,setDisplayContinentList,displayContinentList, displayList}}>
                    <Switch>
                        <Route path='/' exact component={HomeScreen}/>
                        <Route path='/details/:id' exact component={DetailScreen}/>
                    </Switch>
                </ThemeContext.Provider>
            </Router>

        </React.Fragment>
    );
}

export default App;

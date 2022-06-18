import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'


function App() {
    const filterDropDown = useRef(null)

    let [countries, setCountries] = useState([]);
    let [continents, setContinents] = useState([]);
    let [displayList, setDisplayList] = useState([]);
    let [filter,setFilter]=useState("");

    let refreshList = () => {
        console.log(filterDropDown.current.value);
        let filter=filterDropDown.current.value;
        if(filter!=="")
        setDisplayList(countries.filter(country=>country.region===filter))
    }

    useEffect(() => {
        console.log(filterDropDown.current);
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
                setDisplayList(data);
                console.log(data);
                console.log(data.length)
                console.log(new Set(data.map(country => country.region)));
            })
            .catch(err => {
                alert(err)
                console.log(err);
            })

    }, [])
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
                <div className="filter-control justify-content-between my-3">
                    <input type="search" className="search-control my-3" placeholder={'Enter country'}/>
                    <select className={'search-control my-3'} name="filters" id="continent_filter"
                            onChange={() => refreshList()}
                            ref={filterDropDown}
                    >
                        <option key={1000} value={'000'} disabled selected>Filter By Region</option>
                        {continents.map((continent) => {
                            return (
                                <option key={continent} value={continent}>{continent}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="row">
                    {
                        displayList.map((country) => {
                            return (
                                <div className="col-md-3 p-2" key={country.cca2}>
                                    <div className="card">
                                        <img className="card-img-top" src={country.flags.png} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h6 className="country-h font-weight-bold text-left">
                                                {country.name.common}
                                            </h6>
                                            <p className={'country-details'}>Population:&nbsp;{country.population}<br/>Region:&nbsp;{country.region}<br/>Capital:&nbsp;{country.capital}
                                            </p>
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

import React,{useContext} from 'react';
import {ThemeContext} from "../App";
import {Link} from "react-router-dom";


function CountryCard({country}) {
    let theme=useContext(ThemeContext);
        console.log(theme)
    return (
        <div className={`${theme==='light'?'bg-light':'bg-dark'}`}>
            <img className="card-img-top" src={country.flags.png} alt="Card image cap"/>
            <div className="card-body">
                <h6 className={`country-h font-weight-bold text-left ${theme==='light'?'text-dark':'text-light'}`}>
                   <Link to={`/details/${country.name.common}/`}>{country.name.common}</Link>
                </h6>
                <p className={`country-details ${theme==='light'?'text-dark':'text-light'}`}>Population:&nbsp;{country.population}<br/>Region:&nbsp;{country.region}<br/>Capital:&nbsp;{country.capital}
                </p>
            </div>
        </div>
    );
}

export default CountryCard;
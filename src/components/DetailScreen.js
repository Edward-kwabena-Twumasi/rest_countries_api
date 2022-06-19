import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'
import {useContext} from "react";
import {ThemeContext} from "../App";
import {Link, useParams} from "react-router-dom";

function DetailScreen(props) {
    let {theme, countries} = useContext(ThemeContext);
    let {id} = useParams();
    let [activeCountry, setActiveCountry] = useState(countries.filter(xcountry => xcountry.name.common === id)[0]);
    console.log(countries)

    /*  useEffect(() => {
           const country = countries.filter(xcountry => xcountry.name.common === id);
           console.log(country)
           setActiveCountry(country[0]);
       }, []);*/

    //console.log(activeCountry)
    return (
        <section className={`container-fluid py-5 ${theme === 'light' ? 'bg-light-body' : 'bg-dark-body'}`}>
            <section className={'container'}>
                <Link to={'/'}>
                    <button className={`back-btn-control bg-${theme}`}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" color={theme === 'light' ? 'black' : 'white'}/>
                        &nbsp;<span className={theme === 'dark' ? 'text-light' : 'text-dark'}>Back</span>
                    </button>
                </Link>
                {
                    activeCountry && <div className="row">
                        <div className="col-12 col-md-6  my-5">
                            <img src={activeCountry.flags.png}/>
                        </div>
                        <div className="col-12 col-md-3 my-5">
                            <h3 className={`mt-3 font-weight-bold mb-1 details-header ${theme === 'light' ? 'text-dark' : 'text-light'}`}>{activeCountry.name.official}</h3>
                            <p className={`details-text-p ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                <span
                                    className={'font-weight-bold'}>Native Name:</span> &nbsp; {activeCountry.name.official}<br/>
                                <span
                                    className={'font-weight-bold'}>Population:</span> &nbsp; {activeCountry.population}<br/>
                                <span className={'font-weight-bold'}> Region:</span>&nbsp; {activeCountry.region}<br/>
                                <span
                                    className={'font-weight-bold'}>Sub Region:</span> &nbsp; {activeCountry.subregion}<br/>
                                <span className={'font-weight-bold'}>Capital:</span> &nbsp; {activeCountry.capital[0]}<br/>
                            </p>
                        </div>
                        <div className="col-12 col-md-3 my-5">
                            <h3 className={`mt-3 font-weight-bold mb-1 details-header ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                <br/></h3>
                            <p className={`details-text-p ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                <span className={'font-weight-bold'}> Top Level Domain:</span> &nbsp; {activeCountry.tld[0]}<br/>
                                <span
                                    className={'font-weight-bold'}>Currencies: </span> &nbsp; {activeCountry.currencies[Object.keys(activeCountry.currencies)[0]].name}<br/>
                                <span
                                    className={'font-weight-bold'}>Languages: </span> &nbsp; {activeCountry.languages[Object.keys(activeCountry.languages)[0]]}<br/>
                            </p>
                        </div>
                        {activeCountry.borders && <p className={'d-flex justify-content-between align-text-right'}><span className={`${theme === 'light' ? 'text-dark' : 'text-light'}`}>Border Countries</span>
                            <span className="d-flex justify-content-between">{activeCountry.borders.map((xborder,index)=> <><button
                                className={'m-1'}>{xborder}</button></> )}</span>
                        </p>}
                    </div>
                }

            </section>
        </section>
    );
}

export default DetailScreen;
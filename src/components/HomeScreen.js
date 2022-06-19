import React from 'react';
import CountryList from "./CountryList";
import {useContext, useEffect, useRef, useState} from "react";
import {ThemeContext} from "../App";

function HomeScreen({props}) {

    let {theme,countries,displayList,displayContinentList,continents,setDisplayList,setDisplayContinentList}=useContext(ThemeContext);

    const filterDropDown = useRef(null)
    const searchBox = useRef(null)


    let refreshList = () => {
        // console.log(filterDropDown.current.value);
        let filter = filterDropDown.current.value;
        if (filterDropDown.current.value === 'DEFAULT') {
            setDisplayContinentList(countries);
            setDisplayList(countries);
        } else {
            let countriesMatchingFilter = countries.filter(country => country.region === filter)
            setDisplayContinentList(countriesMatchingFilter);
            setDisplayList(countriesMatchingFilter);
        }
    }

    let updateTypedSearchList = () => {
        console.log(searchBox.current.value);
        console.log(searchBox.current.value.length)
        if (searchBox.current.value.length > 0) {
            console.log(displayContinentList.filter(country => country.name.common.toLowerCase().startsWith(searchBox.current.value.toLowerCase())))
            let displayCountries=displayContinentList.filter(country => country.name.common.toLowerCase().startsWith(searchBox.current.value.toLowerCase()));
            setDisplayList(displayCountries);
        }else{
            console.log(displayContinentList)
            setDisplayList(displayContinentList);
        }
    }





    return (
        <section className={`container-fluid ${theme==='light'?'bg-light-body':'bg-dark-body'}`}>
            <div className={`container`}>
                <div className="filter-control justify-content-between mb-3">
                    <div className="input-icons">
                        <i className="fa fa-user icon">
                        </i>
                        <input ref={searchBox} type="search" className="search-control my-3" placeholder={'Enter country'}
                               onChange={updateTypedSearchList}/>
                    </div>
                    {/*<input ref={searchBox} type="search" className="search-control my-3" placeholder={'Enter country'}
                                   onChange={updateTypedSearchList}/>*/}
                    <select className={'search-control my-3'} name="filters" id="continent_filter"
                            onChange={refreshList} defaultValue={'DEFAULT'}
                            ref={filterDropDown}>
                        <option key={1000} value={'DEFAULT'}>Filter By Region</option>
                        {continents.map((continent) => {
                            return (
                                <option key={continent} value={continent}>{continent}</option>
                            );
                        })}
                    </select>
                </div>
                <CountryList displayList={displayList}/>
            </div>
        </section>
    );
}

export default HomeScreen;
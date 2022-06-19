import React from 'react';
import CountryCard from "./CountryCard";

function CountryList({displayList}) {

    return (
        <div className="row">
            {
                displayList.map((country) => {
                    return (
                        <div className="col-md-3 p-2" key={country.cca2}>
                           <CountryCard country={country}/>
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
    );
}

export default CountryList;
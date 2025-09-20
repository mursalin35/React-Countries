import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    // visited countries count 
    const [visitedCountries, setVisitedCountries] = useState([]);

    // visited Flags 
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    // visited Flags 
    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;



    return (
        <div>
            <h1>In the Countries word: {countries.length}</h1>
            {/* visited countries count */}
            <h3>Total Country visited: {visitedCountries.length} </h3>

            <h3>Total Visited Flags: {visitedFlags.length}</h3> {/* visited Flags  */}

            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}

                            // visited countries count 
                            handleVisitedCountries={handleVisitedCountries}

                            // visited Flags 
                            handleVisitedFlags={handleVisitedFlags}
                        >

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
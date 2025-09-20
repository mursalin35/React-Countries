import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    // btn visited/not visited
    const [visited, setVisited] = useState(false)
    // btn even 
    const handelvisited = () => {
        /* btn visited/not visited*/

        // // only visited 
        // setVisited(true)

        // // basic system "visited/not visited"
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // // 2nd system "visited/not visited" 
        // setVisited (visited ? false : true);

        // 3rd system "visited/not visited" 
        setVisited(!visited);


        // visited countries count 
        handleVisitedCountries(country);

    }

    return (
        // // alternet 
        // <div className={`country ${visited ? 'country-visited' : 'country-not-visited'}` }>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}
                {country.area.area > 300000 ? " Big Country" : " Small Country"}</p>
            {/* btn even */}

            <button onClick={handelvisited}>
                {/* btn visited/not visited */}
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            <button onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}}>Add Visited Flags</button>
        </div>
    );
};


export default Country;
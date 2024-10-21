import React from "react"
const CountryName = ({params,}:{params:
    {
        country_name:string,
        Population : string,
        Capital : string,
        Bigcity : string,
    };
}) =>
{
    return(
        <div>
            <h1>Country : {params.country_name}</h1>
            <p>Population:{params.Population}</p>
            <p>Capital:{params.Capital}</p>
            <p>Bigcity:{params.Bigcity}</p>
        </div>
    );
};
export default CountryName;
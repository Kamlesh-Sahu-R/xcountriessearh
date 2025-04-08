import {useEffect, useState} from "react";
import { CountryFlagCard } from "./countryFlagCard";



export default function CountrySearch(){
    
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCountry, setFilteredCountry] = useState([]);

    const url = 'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries';

    const apiCall = async () => {
        try {
            const resp = await fetch(url);
            const jsonResp = await resp.json();
            
            setCountries(jsonResp);
            setFilteredCountry(jsonResp);
            
        } catch (e) {
            console.error("Error fetching data: ", e);
            return <p> Error: {e.message}</p>
        }
    };


    useEffect(() => {apiCall()}, []);
    useEffect(() => {
        const result = countries.filter((country) =>
            country.common.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCountry(result);
        console.log(result);
    }, [search, countries]);

    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
            <div style={{ width: "60%", display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search for countries..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        width: "100%",
                    }}
                />
            </div>
            <div 
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    margin: "15px"
                }}
        >
                    {filteredCountry.map(({common, png}) =>(
                        <CountryFlagCard name = {common} flag ={png} key = {common} />
                    ))}
            </div>
        </div>
    );
}
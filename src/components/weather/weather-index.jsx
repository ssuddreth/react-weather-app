import { useEffect, useState } from "react";
import Search from "../search/search-index";


export default function Weather() {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    function handleSearch() {
        fetchWeatherData(search);
    }

    useEffect(() => {
        fetchWeatherData('charlotte');
    }, []);

    console.log(weatherData);

    return (
        <div>
            <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            />
            {
                loading ? <div>Loading Data...</div> :
                <div>
                    <div className="city-name">
                        <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                    </div>
                </div>
            }
            Weather
        </div>
    )
}
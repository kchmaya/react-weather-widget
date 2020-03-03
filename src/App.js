import React, {useState} from "react";
import DateBuilder from "./DateBuilder";
import WeatherIcons from "./WeatherIcons";

const api = {
    key: "257cdbe44368fc7a24b4ea9da07fd4a4",
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const SearchWeather = (e) => {
        if ((e.key === "Enter") || (e.type === "click")) {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery("");
                    console.log(result);
                });
        }
    };

    return (
        <div className="weather-container">
            <div className="decoration"/>
            <div className="search-box">
                <input type="text"
                       className="search-bar"
                       placeholder="search..."
                       onChange={e => setQuery(e.target.value)}
                       value={query}
                       onKeyPress={SearchWeather}/>
                <div className="search-btn" onClick={SearchWeather}/>
            </div>
            {(typeof weather.main != "undefined") ? (
                <div className="result-box">
                    <WeatherIcons description={weather.weather[0].main}/>
                    <div className="result-info">
                        <DateBuilder/>
                        <div className="location">
                            <div className="location-icon"/>
                            <div>{weather.name}, {weather.sys.country} </div>
                        </div>
                        <div className="temp"> {Math.round(weather.main.temp)}<span>°</span></div>
                        <div className="weather"> {weather.weather[0].main} </div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default App;

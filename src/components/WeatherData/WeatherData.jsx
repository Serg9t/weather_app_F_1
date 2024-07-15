import React from "react";
import "./WeatherData.css";

function WeatherData({ weatherObj }) {
    return (
        <div className="weather-data">
            <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">{weatherObj.humidity} %</div>
            </div>
            <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">{weatherObj.wind} km/h</div>
            </div>
        </div>
    )
}

export default WeatherData;
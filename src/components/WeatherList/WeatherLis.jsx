import React from "react";
import "./WeatherList.css";
import WeatherItem from "../WeatherItem/WeatherItem";

function WeatherList( { dataList }) {
    return (
        <div className="weather-list">
            <h3 className="title-5">5 day weather forecast</h3>
            <div className="list">
                {dataList.map((obj) => <WeatherItem key={obj.dt} obj={obj} />)}

            </div>
        </div>
    )
}

export default WeatherList;
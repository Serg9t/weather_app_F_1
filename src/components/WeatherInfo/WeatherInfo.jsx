import React from "react";
import "./WeatherInfo.css";
import WeatherData from "../WeatherData/WeatherData";

function WeatherInfo({ weatherObj, city }) {
    const currentDate = new Date()

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

    const dayOfWeek = daysOfWeek[currentDate.getDay()]
    const month = months[currentDate.getMonth()]
    const dayOfMonth = currentDate.getDate()

    const formatteDate = `${dayOfWeek}, ${dayOfMonth} ${month}`

    return (
        <div className="weather-info">
            <h2 className="city">{city}</h2>
            <h3>{formatteDate}</h3>
            <div className="weather-basic">
                <img className="weather-image" src={weatherObj.img} alt="sunny" />
                <div className="weather-temp">{weatherObj.temp}C</div>
            </div>

            <WeatherData weatherObj={weatherObj} />
        </div>

    )
}

export default WeatherInfo;
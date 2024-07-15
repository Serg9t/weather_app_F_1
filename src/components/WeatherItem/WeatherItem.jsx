import React from "react";
import "./WeatherItem.css";

function WeatherItem({ obj }) {
    const temp = obj.main.temp
    const img = `http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const currentDate = new Date(obj.dt_txt)
    const day = daysOfWeek[currentDate.getDay()]

    return (
        <div className="item">
            <img src={img} alt="sometext" />
            <div>{day}</div>
            <div>{Math.floor(temp)}°C</div>
        </div>
    )
}

export default WeatherItem;
import React from "react";
import "./App.css";
import SearchContainer from "./SearchContainer/SearchContainer";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherList from "./WeatherList/WeatherLis";
import { useState, useEffect } from "react";

function App() {
    const API_KEY = 'ffdb08e8286b8a90e0d0154d097b03b3';

    const [data, setData] = useState({})
    const [dataList,  setDataList] = useState([])
    const [location, setLocation] = useState('')
    const [city, setCity] = useState('')

    useEffect(() => {
        const fetchDefaultWeather = async () => {
            const defaultLocation = 'Yalta';
            setCity(defaultLocation)
            const urlDefault = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultLocation}&units=Metric&appid=${API_KEY}`
            const res = await fetch(urlDefault)
            const defaultData = await res.json()
            
            setData(defaultData.list[0])
            setDataList(defaultData.list.filter((_, index) => index % 8 === 0))
        }

        fetchDefaultWeather();
    }, [])

    const handleInputChange = (event) => {
        setLocation(event.target.value);
        setCity(event.target.value)
        
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setCity(event.target.value)
            search()
        }
    }

    const search = async () => {
        if (location.trim() !== '') {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=Metric&appid=${API_KEY}`
            const res = await fetch(url)
            const searchData = await res.json()
            if (searchData.cod === "200") {
                setData(searchData.list[0])
                setDataList(searchData.list.filter((_, index) => index % 8 ===0))
                setLocation('')
            } else {
                setCity('Not Found...')
            }       
        }
    }

    const changeSelect =  async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Metric&appid=${API_KEY}`
        const res = await fetch(url)
        const searchData = await res.json()

        setData(searchData.list[0])
        setDataList(searchData.list.filter((_, index) => index % 8 ===0))
        setCity(city)
    }

    const temp = data.main ? `${Math.floor(data.main.temp)}°` : null
    const humidity = data.main ? data.main.humidity : null
    const wind = data.wind ? data.wind.speed : null
    const img = data.weather ? data.weather[0].icon : null

    const weatherObj = {
        temp: temp,
        humidity: humidity,
        wind: wind,
        img: `http://openweathermap.org/img/wn/${img}.png`
    }

    return (
        <div className="container">
            <div className="weather-app">
                <h1 className="title">Weather App</h1>
                <SearchContainer
                    location={location}
                    handleInputChange={handleInputChange}
                    search={search}
                    handleKeyDown={handleKeyDown}
                    changeSelect={changeSelect}
                />
                <WeatherInfo weatherObj={weatherObj} city={city} />
                <hr />
                <WeatherList dataList={dataList} />
            </div>
        </div>
    )
}

export default App;